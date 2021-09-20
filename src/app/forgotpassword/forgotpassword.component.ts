import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  user!:User;

  constructor(private router:Router) { }

  

  ngOnInit(): void {
    this.user=new User()
  }

  Submitdata(){
console.log(this.user)
  }
}

class User{
  NewPassword!: string;
  Password!:string;
  otp!:string;
  constructor(){}

  

}