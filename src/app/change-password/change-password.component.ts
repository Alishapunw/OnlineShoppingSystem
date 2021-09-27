import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

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
    //this.retailer=new Retailer();
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
    this.ChangePasswordForm.value["Email"]=sessionStorage.getItem('Email');

    if(this.ChangePasswordForm.value["NewPassword"] != this.ChangePasswordForm.value["ConfirmPassword"] ){
      this.PasswordMatch = false;
      this.IsLoading=false;
    }
    this.service.ChangePassword(this.ChangePasswordForm.value).subscribe( (data:any) =>{ 
      console.log(data);
      
      if(data["LoginMessage"] == "InvalidPassword"){
        this.InvalidPassword=true;
        this.IsLoading=false;
      }
    }
    );
  }
}



