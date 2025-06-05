import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],

  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';


  currentPage: number = 1;
  pageSize: number = 6
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const session = sessionStorage.getItem('user');
    if (session) {
      const sessionData = JSON.parse(session);
      const userId = sessionData.user.id;

      this.loadProducts(userId);
    } else {
      this.router.navigate(['/']);
    }
  }

  loadProducts(id: number): void {
    this.productService.getProduct(id).then(res => {
      this.products = res;
    });
  }

  filteredProducts(): Product[] {
    const filtered = this.products.filter(p =>
      p.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.descricao.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    const startIndex = (this.currentPage - 1) * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }


  viewDetails(id: number): void {
    this.router.navigate(['/product', id]);
  }


  get totalPages(): number {
    const totalFiltered = this.products.filter(product =>
      product.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.descricao.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return Math.ceil(totalFiltered.length / this.pageSize);
  }


  goToPage(page: number): void {
    this.currentPage = page;
  }
}
