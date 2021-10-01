import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Retailer } from './retailer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  private url="http://localhost:65061/api/admins";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public httpClient:HttpClient) { }
  AddRetailer(retailer:Retailer)
  {
    return this.httpClient.post(this.url+'/addRetailer',JSON.stringify(retailer),this.httpOptions);
  }
  GetRetailers():Observable<Retailer[]>
  {
    return this.httpClient.get<Retailer[]>(this.url+'/getRetailers');
  }
  DeleteRetailer(email:any)
  {
    return this.httpClient.delete(this.url+'/del/'+email);
  }
  GetAllProducts():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.url+'/adminproducts');
  }
  Approve(id:number)
  {
    return this.httpClient.post(this.url+'/status/'+id,JSON.stringify(id),this.httpOptions);
  }
}
