import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  user!:User;
  IsOTPValid:boolean = true;
  IsLoading:boolean = false;
  PasswordMatch:boolean=true;

  ForgotPasswordForm=new FormGroup({
    Password:new FormControl("",[Validators.required,Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
    ConfirmPassword:new FormControl("",[Validators.required,Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
    Otp:new FormControl("",[Validators.required]),
  });

  constructor(public service:AuthenticationService, public router:Router) { }

  

  ngOnInit(): void {
    this.user=new User()
    
  }

  /*get Email(){
    return this.ForgotPasswordForm.get("Email");
  }*/
  get Password(){
    return this.ForgotPasswordForm.get("Password");
  }
  get ConfirmPassword(){
    return this.ForgotPasswordForm.get("ConfirmPassword");
  }
  get Otp(){
    return this.ForgotPasswordForm.get("Otp");
  }

  Submitdata(){
    this.IsLoading=true;
    this.IsOTPValid = true;
    this.PasswordMatch = true;

    
    this.ForgotPasswordForm.value["Email"]=localStorage.getItem('ForgotEmail');

    if(this.ForgotPasswordForm.value["Password"] != this.ForgotPasswordForm.value["ConfirmPassword"] ){
      this.PasswordMatch = false;
      this.IsLoading=false;
    }
    else{
    this.service.ForgotPassword(this.ForgotPasswordForm.value).subscribe( (data:any) =>{ 
      console.log(data);
      if(data["IsOTPValid"] == true){
        this.IsOTPValid=true;
        this.IsLoading=false;
        this.router.navigateByUrl("/Login")
      }
      else if(data["IsOTPValid"] == false){
        this.IsOTPValid=false;
        this.IsLoading=false;
      }
     } 
     );
    }


  }
}

class User{
  NewPassword!: string;
  Password!:string;
  otp!:string;
  constructor(){}
}