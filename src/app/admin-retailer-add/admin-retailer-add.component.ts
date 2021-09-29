import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-retailer-add',
  templateUrl: './admin-retailer-add.component.html',
  styleUrls: ['./admin-retailer-add.component.css']
})
export class AdminRetailerAddComponent implements OnInit {

  ContactForm:FormGroup=new FormGroup({
    RetailerName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+$")]),
    password:new FormControl("",[Validators.required]),
    RetailerMobile: new FormControl("",[Validators.required,Validators.minLength(10)])
  })

constructor(public service:AdminService,public route:Router ) { }


ngOnInit(): void {
}
get RetailerName()
{
  return this.ContactForm.get('RetailerName')
}
get email()
{
  return this.ContactForm.get('email')
}
get RetailerMobile(){
  return this.ContactForm.get('RetailerMobile')
}
get password(){
  return this.ContactForm.get('password')
}

SubmitInfo(){
console.log(this.ContactForm.value);
this.service.AddRetailer(this.ContactForm.value).subscribe((data:any)=>
{
  console.log(data);
  this.route.navigateByUrl('/AdminRetailerDetails');
})
}

}

