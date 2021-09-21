import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RetailerHomeComponent } from '../retailer-home/retailer-home.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  retailer?:any;
  constructor() { }

  ngOnInit(): void {
    this.retailer=new Retailer("","");
  }
  Submitdata(){
    console.log(this.retailer);
  }

}
class Retailer{
  EmailId?:string;
  Password?:string;

  constructor(EmailId:string,Password:string){
    this.EmailId=EmailId;
    this.Password=Password;

  }
}
