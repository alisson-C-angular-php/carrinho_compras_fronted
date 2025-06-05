import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });

  
  }

onLoginClick(): void {
  if (this.loginForm.valid) {
    const credentials = this.loginForm.value;

    this.http.post("login", credentials).then((response: any) => {
      sessionStorage.setItem("user", JSON.stringify(response));
      this.router.navigate(['/home']); 
    }).catch(error => {
      
      console.error('Erro no login:', error);
      alert('Login inválido. Verifique suas credenciais.');
    });
  }
}

}