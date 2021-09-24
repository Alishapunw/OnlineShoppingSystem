import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RetailerHomeComponent } from '../retailer-home/retailer-home.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  ChangePasswordForm=new FormGroup({
    OldPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$")]),
    NewPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$")]),
  });
  
  constructor() { }

  ngOnInit(): void {
    //this.retailer=new Retailer();
  }

  get OldPassword(){
    return this.ChangePasswordForm.get("OldPassword");
  }
  get NewPassword(){
    return this.ChangePasswordForm.get("NewPassword");
  }

  Submitdata(){
    console.log(this.ChangePasswordForm.value);
  }

}

