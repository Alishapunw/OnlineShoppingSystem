import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer} from './customer';
import { Retailer } from './retailer';
import { Admin } from './admin';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url='http://localhost:65061/api/Authentication';

  
  constructor(private client:HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Register(customers:Customer){
    return this.client.post(this.url+"/Register", JSON.stringify(customers), this.httpOptions)
  }

  Login(admin:Admin){
    console.log(admin);
    
    return this.client.post(this.url+"/Login", JSON.stringify(admin), this.httpOptions)
  }

  CheckEmail(customer:Customer)
  {
    return this.client.post(this.url+"/EmailExists",JSON.stringify(customer) ,this.httpOptions);
  }

  Login1(customer:Customer){
    console.log(customer);
    
    return this.client.post(this.url+"/Login1", JSON.stringify(customer), this.httpOptions)
  }

  Login2(retailer:Retailer){    
    return this.client.post(this.url+"/Login2", JSON.stringify(retailer), this.httpOptions)
  }

  ForgotPassword(customer:Customer){    
    return this.client.post(this.url+"/ForgotPassword", JSON.stringify(customer), this.httpOptions)
  }

}
