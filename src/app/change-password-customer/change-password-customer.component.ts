import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-change-password-customer',
  templateUrl: './change-password-customer.component.html',
  styleUrls: ['./change-password-customer.component.css']
})
export class ChangePasswordCustomerComponent implements OnInit {
  IsLoading:boolean = false;
  InvalidPassword:boolean = false;
  PasswordMatch:boolean=true;

  ChangePasswordForm=new FormGroup({
    OldPassword:new FormControl("",[Validators.required,Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
    NewPassword:new FormControl("",[Validators.required,Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
    ConfirmPassword:new FormControl("",[Validators.required])
  });

  constructor(public service:AuthenticationService, public router:Router) { }

  ngOnInit(): void {
  }
  get OldPassword(){
    return this.ChangePasswordForm.get("OldPassword");
  }
  get NewPassword(){
    return this.ChangePasswordForm.get("NewPassword");
  }
  get ConfirmPassword(){
    return this.ChangePasswordForm.get("ConfirmPassword");
  }

  Submitdata(){
    this.IsLoading=true;
    this.InvalidPassword = false;
    console.log(this.ChangePasswordForm.value);
    this.ChangePasswordForm.value["Email"]=localStorage.getItem('Email');

    if(this.ChangePasswordForm.value["NewPassword"] != this.ChangePasswordForm.value["ConfirmPassword"] ){
      this.PasswordMatch = false;
      this.IsLoading=false;
    }
    this.service.ChangePasswordCustomer(this.ChangePasswordForm.value).subscribe( (data:any) =>{ 
      console.log(data);

      
      if(data["LoginMessage"] == "InvalidPassword"){
        this.InvalidPassword=true;
        this.IsLoading=false;
      }
      this.router.navigateByUrl("../Home");
    }
    );
  }
  

}
