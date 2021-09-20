import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  ContactForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+$")]),
    city:new FormControl(),
    Mobileno: new FormControl("",[Validators.required]),
  })

constructor() { }
cities=["Mumbai","Pune","Goa"];

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
  return this.ContactForm.get('Mobileno')
}


SubmitInfo(){
console.log(this.ContactForm.value);
}
}
