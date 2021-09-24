import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  user!:User;
  ForgotPasswordForm=new FormGroup({
    NewPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$")]),
    ConfirmPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$")]),
    Otp:new FormControl("",[Validators.required]),
  });

  constructor(private router:Router) { }

  

  ngOnInit(): void {
    this.user=new User()
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
    console.log(this.ForgotPasswordForm.value)
  }
}

class User{
  NewPassword!: string;
  Password!:string;
  otp!:string;
  constructor(){}
}