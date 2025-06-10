import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../../components/alert-component/alert-component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AlertComponent,  NgxMaskDirective,
    NgxMaskPipe 
  ],
  providers: [provideNgxMask()], 
  templateUrl: './product-create.html',
  styleUrls: ['./product-create.scss']
})
export class ProductCreate {
  userId: number = 0;

  product: Product = {
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
   
    usuarioId: this.userId 
  };

  alertMessage = '';
  alertType: 'success' | 'danger' | 'warning' | 'info' = 'info';
  showAlert = false;
  combo:any[] = []
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(){
    this.getComboUser();
  }

    getComboUser() {
  const storedUser = sessionStorage.getItem("user");

  if (storedUser) {
    const userData = JSON.parse(storedUser);

    if (userData.combo && Array.isArray(userData.combo)) {
      this.combo = [...userData.combo]; 
    } else {
      console.warn('Campo "combo" não encontrado ou inválido.');
    }
  } else {
    console.warn('Nenhum dado de usuário encontrado no sessionStorage.');
  }
}


  onSubmit(): void {
    this.productService.addProduct(this.product).then(() => {
      this.showCustomAlert('Produto cadastrado com sucesso!', 'success');
      setTimeout(() => this.router.navigate(['/produtos']), 2000);
    }).catch((error: any) => {
      console.error(error);
      this.showCustomAlert('Erro ao cadastrar produto.' + error.error.message, 'danger');
    });
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
