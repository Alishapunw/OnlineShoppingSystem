import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-retailer-add',
  templateUrl: './admin-retailer-add.component.html',
  styleUrls: ['./admin-retailer-add.component.css']
})
export class AdminRetailerAddComponent implements OnInit {

  ContactForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+$")]),
    mobileno: new FormControl("",[Validators.required,Validators.minLength(10)]),
    id:new FormControl("",[Validators.required]),
  })

constructor() { }


ngOnInit(): void {
}
get fname()
{
  return this.ContactForm.get('firstName')
}
get email()
{
  return this.ContactForm.get('email')
}
get Mobileno(){
  return this.ContactForm.get('mobileno')
}
get id(){
  return this.ContactForm.get('id')
}

SubmitInfo(){
console.log(this.ContactForm.value);
}
}

