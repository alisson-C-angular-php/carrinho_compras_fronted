import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable(); 

  constructor() {
    const savedCart = sessionStorage.getItem('cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];
    this.cartSubject.next(this.cart); 
  }

  private saveCart(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart); 
  }

  addToCart(product: Product): void {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity! += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.saveCart();
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(item => item.id !== product.id);
    this.saveCart(); 
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }
}
