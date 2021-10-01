import { Component, OnInit } from '@angular/core';
import { Retailer } from '../retailer';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-retailer-details',
  templateUrl: './retailer-details.component.html',
  styleUrls: ['./retailer-details.component.css']
})
export class RetailerDetailsComponent implements OnInit {
  email:any;
  r!:Retailer;
  constructor(public service:RetailerService) { }

  ngOnInit(): void {
    this.email=localStorage.getItem("Email");
    this.service.GetRetailerByEmail(this.email).subscribe((data:Retailer)=>
    {
      console.log(data);
      this.r=data;
    })
  }

}
