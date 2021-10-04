import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public service:RetailerService,  private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  async ngOnInit() {
     this.spinner.show();


    this.email=localStorage.getItem("Email");
    console.log(this.email);
    /*this.service.GetRetailerByEmail(this.email).subscribe((data:Retailer1)=>
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
    )*/

    const promise = await this.service.GetRetailerByEmail(this.email).toPromise();
    this.Ret=promise;
    this.id1=this.Ret.retailerId;

    const promise2 = await this.service.getRetailerProducts(this.id1).toPromise()
    this.RetailerProducts=promise2;


    this.spinner.hide();

  }


}
