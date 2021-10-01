import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer!:Customer;
  public url="http://localhost:65061/api/customers";
  constructor(public httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  }
  GetCustomer(email:string)
    {
      return this.httpClient.get(this.url+'/getcustomerbyemail/'+email);
    }
}
