import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  email:any;
  customer!:Customer;
  constructor(public service:CustomerService) { }

  ngOnInit(): void {
    this.email=localStorage.getItem("Email");
    this.service.GetCustomer(this.email).subscribe((data:any)=>
    {
      this.customer=data;
    })
  }

}
