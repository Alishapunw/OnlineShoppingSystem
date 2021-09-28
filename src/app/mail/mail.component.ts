import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  UserDoesNotExist = false;
  IsLoading:boolean = false;

  constructor(private service:AuthenticationService,private route:Router) { }

  ForgotPasswordForm1=new FormGroup({
    Email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
  })

  ngOnInit(): void {
  }


  SubmitData1(){
    this.IsLoading=true;
    this.service.CheckEmail(this.ForgotPasswordForm1.value).subscribe((data:any) =>{ 
      if(data["EmailExists"] == true){
        //console.log("Email Exists");
        this.UserDoesNotExist=false;
        this.route.navigateByUrl("/ForgotPassword");
        localStorage.setItem("ForgotEmail", this.ForgotPasswordForm1.value["Email"])
      }
      else if(data["EmailExists"] == false){
        this.UserDoesNotExist=true;
       // console.log("Error");
      }
     } 
    )
    }
}
