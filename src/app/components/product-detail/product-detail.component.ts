import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../alert-component/alert-component';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, AlertComponent],
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product: any;
  alertMessage = '';
  alertType: 'success' | 'danger' | 'warning' | 'info' = 'info';
  showAlert = false;
  searchTerm: any
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductDetail(id).then(res => {
      this.product = res;

    });
  }


  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.showCustomAlert('Produto adicionado ao carrinho com sucesso!', 'success');
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
