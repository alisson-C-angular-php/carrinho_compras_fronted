import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../alert-component/alert-component';

@Component({
  selector: 'app-product-create-componet',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './product-create-componet.html',
  styleUrls: ['./product-create-componet.scss']
})
export class ProductCreateComponet {
  user = JSON.parse(sessionStorage.getItem('user') || '{}');
  userId = Number(this.user?.user?.id);

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

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.productService.addProduct(this.product).then(() => {
      this.showCustomAlert('Produto cadastrado com sucesso!', 'success');
      setTimeout(() => this.router.navigate(['/produtos']), 2000);
    }).catch((error: any) => {
      console.error(error);
      this.showCustomAlert('Erro ao cadastrar produto.', 'danger');
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
