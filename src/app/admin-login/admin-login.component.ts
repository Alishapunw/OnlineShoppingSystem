import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user!:User;
  LoginForm=new FormGroup({
    UserName:new FormControl("",[Validators.required,Validators.minLength(8)]),
    Password:new FormControl("",[Validators.required,Validators.pattern("/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/")])
  });

  constructor() { }

  get UserName(){
    return this.LoginForm.get("UserName");
  }
  get Password(){
    return this.LoginForm.get("Password");
  }

  ngOnInit(): void {
    this.user=new User()
  }

  Submitdata(){
    console.log(this.LoginForm.value);
  }
}

class User{
  FirstName!: string;
  Password!:string;
  constructor(){}

  

}