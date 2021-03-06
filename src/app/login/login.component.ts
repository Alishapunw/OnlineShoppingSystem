import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   userRole:string = "customer";
 

  IsLoading:boolean = false;
  UserDoesNotExist:boolean = false;
  InvalidPassword:boolean = false;


  LoginForm = new FormGroup({
    Email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    Password: new FormControl("",  [Validators.required, Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
  })

  constructor(public service:AuthenticationService, public router2:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

 public get Email2()  {
    return this.LoginForm.get('Email');
  }

  get Password2(){
    return this.LoginForm.get("Password");
  }

  changeUserRole(currentRole:string){
    this.userRole = currentRole;
  }

  SubmitForm(){
    this.IsLoading=true;
    this.UserDoesNotExist = false;
    this.InvalidPassword = false;
    
    console.log(this.LoginForm.value);
  if(this.userRole=='admin'){
    this.service.Login(this.LoginForm.value).subscribe( (data:any) =>{ 
      console.log(data);

    
      if(data["LoginMessage"] == "UserDoesNotExist"){
        this.UserDoesNotExist=true;
        this.IsLoading=false;
      }
      else if(data["LoginMessage"] == "InvalidPassword"){
        this.InvalidPassword=true;
        this.IsLoading=false;
      }
      else if(data["LoginMessage"] == "Success"){
        this.IsLoading=false;
        localStorage.setItem("Email", this.LoginForm.value["Email"]);
        localStorage.setItem("userRole", "admin");
        this.service.subject.next(true);
        this.service.userRole.next("admin");
        this.redirectUserBasedOnRole();
        this.toastr.success('Login Success', '', {
            timeOut: 2000,
            positionClass: "toast-bottom-right"
          });
      }

     } 
     );
    }
    if(this.userRole=='customer'){
      this.service.Login1(this.LoginForm.value).subscribe( (data:any) =>{ 
        console.log(data);
  
      
        if(data["LoginMessage"] == "UserDoesNotExist"){
          this.UserDoesNotExist=true;
          this.IsLoading=false;
        }
        else if(data["LoginMessage"] == "InvalidPassword"){
          this.InvalidPassword=true;
          this.IsLoading=false;
        }
        else if(data["LoginMessage"] == "Success"){
          this.IsLoading=false;
          localStorage.setItem("Email", this.LoginForm.value["Email"])
          localStorage.setItem("userRole", "customer");
          this.service.subject.next(true);
          this.service.userRole.next("customer");
          this.redirectUserBasedOnRole();
          this.toastr.success('Login Success', '', {
            timeOut: 2000,
            positionClass: "toast-bottom-right"
          });

          console.log(localStorage.getItem("Email"));
          console.log(localStorage.getItem("userRole"));
          
        }
       } 
       );
      }
  
      if(this.userRole=='retailer'){
        this.service.Login2(this.LoginForm.value).subscribe( (data:any) =>{ 
          console.log(data);
    
        
          if(data["LoginMessage"] == "UserDoesNotExist"){
            this.UserDoesNotExist=true;
            this.IsLoading=false;
          }
          else if(data["LoginMessage"] == "InvalidPassword"){
            this.InvalidPassword=true;
            this.IsLoading=false;
          }
          else if(data["LoginMessage"] == "Success"){
            this.IsLoading=false;
            localStorage.setItem("Email", this.LoginForm.value["Email"])
            localStorage.setItem("userRole", "retailer");
            this.service.subject.next(true);
            this.service.userRole.next("retailer")
            this.redirectUserBasedOnRole();
            this.toastr.success('Login Success', '', {
            timeOut: 2000,
            positionClass: "toast-bottom-right"
          });
          
          }
         } 
         );
        }

  }



  redirectUserBasedOnRole(){

    if(this.userRole == "admin"){

        this.router2.navigateByUrl('AdminRetailerDetails');

    }

    else if(this.userRole == "retailer"){

        this.router2.navigateByUrl('RetailerProfile');

    }

    else if(this.userRole == "customer"){

        this.router2.navigateByUrl('Home');

    }

  }

}


class User{
  FirstName?: string;
  Password?:string;
  constructor(){}
}