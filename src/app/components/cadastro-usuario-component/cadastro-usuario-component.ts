import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { AlertComponent } from '../alert-component/alert-component';

@Component({
  selector: 'app-cadastro-usuario-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule,AlertComponent],
  templateUrl: './cadastro-usuario-component.html',
  styleUrls: ['./cadastro-usuario-component.scss']
})
export class CadastroUsuarioComponent {
  cadastroForm: FormGroup;
  alertMessage = '';
  alertType: 'success' | 'danger' | 'warning' | 'info' = 'info';
  showAlert = false;
  constructor(private http: HttpService, private router: Router, private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      funcao: ['', Validators.required]
    });
  }





  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const novoUsuario = this.cadastroForm.value;

      this.http.post('user', novoUsuario)
        .then(() => {
          this.showCustomAlert('Usuário cadastrado com sucesso!', 'success');

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000); 
        })
        .catch((err) => {
          const message = err?.error?.message || 'Erro ao cadastrar usuário.';
          this.showCustomAlert(message, 'danger');
        });

    } else {
      this.cadastroForm.markAllAsTouched();
      this.showCustomAlert('Preencha todos os campos corretamente.', 'warning');
    }
  }

  showCustomAlert(message: string, type: 'success' | 'danger' | 'warning' | 'info') {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}

