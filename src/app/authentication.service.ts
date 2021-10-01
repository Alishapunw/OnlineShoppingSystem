import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Customer} from './customer';
import { Retailer } from './retailer';
import { Admin } from './admin';
import { RetailerChangePassword } from './retailer-change-password';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from './user-details';
import { CustomerChangePassword } from './customer-change-password';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public subject = new Subject<boolean>();
  public userRole = new Subject<string>();
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

  ChangePassword(retailer:RetailerChangePassword){    
    return this.client.post(this.url+"/ChangePassword", JSON.stringify(retailer), this.httpOptions)
  }

  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
  ChangePasswordCustomer(customer:CustomerChangePassword)
  {
    return this.client.post(this.url+'/ChangePasswordCustomer/',JSON.stringify(customer),this.httpOptions);
  }

  getUserStatus():Observable<string>
  {
    return this.userRole.asObservable();
  }
  


}

