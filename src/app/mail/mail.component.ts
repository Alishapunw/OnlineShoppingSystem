import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  UserDoesNotExist = false;
  IsLoading!: boolean;

  constructor(private service: AuthenticationService, private route: Router) { }

  ForgotPasswordForm1 = new FormGroup({
    Email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
  })

  ngOnInit(): void {
  }


  async SubmitData1() {
    this.IsLoading = true;


    const data: any = await this.service.CheckEmail(this.ForgotPasswordForm1.value).toPromise();
    if (data["EmailExists"] == true) {
      this.UserDoesNotExist = false;
      this.route.navigateByUrl("/ForgotPassword");
      localStorage.setItem("ForgotEmail", this.ForgotPasswordForm1.value["Email"])
    }
    else if (data["EmailExists"] == false) {
      this.UserDoesNotExist = true;
    }



    this.IsLoading = false;

  }
}


/* this.service.CheckEmail(this.ForgotPasswordForm1.value).subscribe((data:any) =>{
       if(data["EmailExists"] == true){
         this.UserDoesNotExist=false;
         this.route.navigateByUrl("/ForgotPassword");
         localStorage.setItem("ForgotEmail", this.ForgotPasswordForm1.value["Email"])
       }
       else if(data["EmailExists"] == false){
         this.UserDoesNotExist=true;
       }
      }
     )*/