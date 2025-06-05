import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getHeaders(): HttpHeaders {
    const token = sessionStorage.getItem("token_acess") ?? "";

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

   get(req: string, options?: any) {
    return  this.http
      .get(`${API}/${req}`, { ...options, headers: this.getHeaders() })
      .toPromise()
      .then((result: any) => result);
  }

  async post(req: string, value: any, options?: any) {
    return  this.http
      .post(`${API}/${req}`, value, { ...options, headers: this.getHeaders() })
      .toPromise()
      .then((result: any) => result);
  }

  

  put(req: string, value: any): Promise<any> {
    return  this.http
      .put(`${API}/${req}`, value, { headers: this.getHeaders() })
      .toPromise()
      .then((result: any) => result);
  }

   delete(req: string, codigo: number) {
    return  this.http
      .delete(`${API}/${req}/${codigo}`, { headers: this.getHeaders() })
      .toPromise()
      .then((result: any) => result);
  }
}