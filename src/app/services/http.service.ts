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
  let accessToken = "";
  let parsedData: any = null;

  const token = sessionStorage.getItem("user");

  try {
    parsedData = token ? JSON.parse(token) : null;
    accessToken = parsedData?.token_acess ?? "";
  } catch (error) {
    console.warn("Token mal formatado no sessionStorage:", error);
  }

  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  if (accessToken) {
    headers = headers.set('Authorization', `Bearer ${accessToken}`);
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