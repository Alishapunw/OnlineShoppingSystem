import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-retailer-home',
  templateUrl: './retailer-home.component.html',
  styleUrls: ['./retailer-home.component.css']
})
export class RetailerHomeComponent implements OnInit {

  retailer?:any;
  LoginForm=new FormGroup({
    Email:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$")]),
    Password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$")])
  });

  constructor() { }

  ngOnInit(): void {
    //this.retailer=new Retailer("","");
  }

  get Email(){
    return this.LoginForm.get("Email");
  }
  get Password(){
    return this.LoginForm.get("Password");
  }
  Submitdata(){
    console.log(this.LoginForm.value);
  }

}

