import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer-home',
  templateUrl: './retailer-home.component.html',
  styleUrls: ['./retailer-home.component.css']
})
export class RetailerHomeComponent implements OnInit {

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
  EmailId!: string;
  Password!:string;
  constructor(EmailId:string,Password:string){
    this.EmailId=EmailId;
    this.Password=Password;
  }
}