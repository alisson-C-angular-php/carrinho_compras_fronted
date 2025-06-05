import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpService) {}

 
  getProductDetail(id: number) {
    return this.http.get(`product/${id}`);
  }

  getProduct(id: number) {
    return this.http.get(`product?idUser=${id}`);
  }

  addProduct(product: Product) {
    return this.http.post("product", product);
  }
}
