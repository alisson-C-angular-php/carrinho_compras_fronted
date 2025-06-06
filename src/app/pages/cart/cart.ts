import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-cart',
  templateUrl: './cart.html'
})
export class Cart implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;
  private subscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.updateTotal();
    });
  }

  remove(product: Product) {
    this.cartService.removeFromCart(product);
  }

  updateTotal(): void {
    this.total = this.cartItems.reduce(
      (sum, item) => sum + (+item.preco * (item.quantity || 1)),
      0
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
