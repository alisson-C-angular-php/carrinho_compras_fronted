import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-cadastro-usuario-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './cadastro-usuario-component.html',
  styleUrls: ['./cadastro-usuario-component.scss']
})
export class CadastroUsuarioComponent {
  cadastroForm: FormGroup;
  alertMessage = '';
  alertType:  'success' | 'danger' | 'warning' | 'info' = 'info';
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
          this.router.navigate(['/']);
        })
        .catch((err) => {
          console.error(err);
          this.showCustomAlert('Erro ao cadastrar usuário.', 'danger');
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

