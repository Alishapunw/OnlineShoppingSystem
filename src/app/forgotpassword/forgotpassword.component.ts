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
  UserDoesNotExist:boolean = false;
  IsLoading:boolean = false;
  PasswordMatch:boolean=true;

  ForgotPasswordForm=new FormGroup({
    Email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    NewPassword:new FormControl("",[Validators.required,Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
    ConfirmPassword:new FormControl("",[Validators.required,Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
    Otp:new FormControl("",[Validators.required]),
  });

  constructor(public service:AuthenticationService, public router:Router) { }

  

  ngOnInit(): void {
    this.user=new User()
  }

  get Email(){
    return this.ForgotPasswordForm.get("Email");
  }
  get NewPassword(){
    return this.ForgotPasswordForm.get("NewPassword");
  }
  get ConfirmPassword(){
    return this.ForgotPasswordForm.get("ConfirmPassword");
  }
  get Otp(){
    return this.ForgotPasswordForm.get("Otp");
  }

  Submitdata(){
    this.IsLoading=true;
    this.UserDoesNotExist = false;
    console.log(this.ForgotPasswordForm.value["NewPassword"] );
    console.log(this.ForgotPasswordForm.value["ConfirmPassword"]);    
    if(this.ForgotPasswordForm.value["Password"] != this.ForgotPasswordForm.value["ConfirmPassword"] ){
      this.PasswordMatch = false;
      this.IsLoading=false;
      console.log(); 
    }
    this.service.Login(this.ForgotPasswordForm.value).subscribe( (data:any) =>{ 
      console.log(data);
      
      if(data["LoginMessage"] == "UserDoesNotExist"){
        this.UserDoesNotExist=true;
        this.IsLoading=false;
      }
     } 
     );
  }
}

class User{
  NewPassword!: string;
  Password!:string;
  otp!:string;
  constructor(){}
}