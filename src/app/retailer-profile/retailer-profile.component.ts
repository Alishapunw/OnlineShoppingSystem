import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { RetailerService } from '../retailer.service';
import { Retailer1 } from '../retailer1';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})
export class RetailerProfileComponent implements OnInit {

  RetailerProducts:Product[]=[];
  Ret!:Retailer1;
  email:any;
  id1:number=0;
  constructor(public service:RetailerService) { }

  ngOnInit(): void {
    this.email=localStorage.getItem("Email");
    console.log(this.email);
    this.service.GetRetailerByEmail(this.email).subscribe((data:Retailer1)=>
    {
      console.log(this.email)
      this.Ret=data;
      this.id1=this.Ret.retailerId;
      console.log(this.Ret.retailerId);
      this.service.getRetailerProducts(this.id1).subscribe((data1:Product[])=>
      {
        this.RetailerProducts=data1;
      })
    }
    )
  }


}
