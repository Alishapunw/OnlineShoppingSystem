import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';
=======
import { Observable, Subject } from 'rxjs';
import { Customer} from './customer';
>>>>>>> f3cb726501ae95ff167fa9600cfd5394f0803b5e
import { Retailer } from './retailer';
import { Admin } from './admin';
import { RetailerChangePassword } from './retailer-change-password';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

<<<<<<< HEAD
  // private url='http://localhost:65061/api/Authentication';
  private url='http://localhost:65061/api';

  
=======
  public subject = new Subject<boolean>();
  private url='http://localhost:65061/api/Authentication';
>>>>>>> f3cb726501ae95ff167fa9600cfd5394f0803b5e

  

  constructor(private client:HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Register(userdetails:UserDetails){
    return this.client.post(this.url+"/Register", JSON.stringify(userdetails), this.httpOptions)
  }

  Login(userdetails:UserDetails){
    console.log(userdetails);
    
<<<<<<< HEAD
    return this.client.post(this.url+"/Login", JSON.stringify(userdetails), this.httpOptions)
=======
    return this.client.post(this.url+"/Login", JSON.stringify(admin), this.httpOptions)
  }

  CheckEmail(customer:Customer)
  {
    return this.client.post(this.url+"/EmailExists",JSON.stringify(customer) ,this.httpOptions);
>>>>>>> f3cb726501ae95ff167fa9600cfd5394f0803b5e
  }
  Login1(retailer:Retailer){
    console.log(retailer);
    
    return this.client.post(this.url+"/Login", JSON.stringify(retailer), this.httpOptions)
  }
<<<<<<< HEAD
  Login2(userdetails:Admin){
    console.log(userdetails);
    
    return this.client.post(this.url+"/Login", JSON.stringify(userdetails), this.httpOptions)
  }
  CheckEmail(email:any)
  {
    return this.client.post(this.url+"/customers/Email",JSON.stringify(email),this.httpOptions);
  }
=======

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


>>>>>>> f3cb726501ae95ff167fa9600cfd5394f0803b5e
}
