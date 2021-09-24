import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:User;
  LoginForm=new FormGroup({
    UserName:new FormControl("",[Validators.required,Validators.minLength(8)]),
    Password:new FormControl("",[Validators.required,Validators.pattern("/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/")])
  });


  constructor() { }

  ngOnInit(): void {
    this.user=new User()
  }

  get UserName(){
    return this.LoginForm.get("UserName");
  }

  get Password(){
    return this.LoginForm.get("Password");
  }

  Submitdata(){
    console.log(this.user)
  }
}

class User{
  FirstName?: string;
  Password?:string;
  constructor(){}
}