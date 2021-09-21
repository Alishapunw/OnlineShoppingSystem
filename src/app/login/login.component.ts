import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:User;

  constructor() { }

  ngOnInit(): void {
    this.user=new User()
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