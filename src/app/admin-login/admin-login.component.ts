import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

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
  FirstName!: string;
  Password!:string;
  constructor(){}

  

}