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
  constructor(private service:AuthenticationService,private route:Router) { }
  ForgotPasswordForm1=new FormGroup({
    Email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
  })

  ngOnInit(): void {
  }
  SubmitData1()
  {
  this.service.CheckEmail(this.ForgotPasswordForm1.value).subscribe((data:any) =>{ 
    console.log(data);
    
   if(data!=null){
     this.UserDoesNotExist=false;
      this.route.navigateByUrl("/ForgotPassword");
    }
    else
    {
      this.UserDoesNotExist=true;
      console.log("Error")
    }
   } 
  )
  }
}
