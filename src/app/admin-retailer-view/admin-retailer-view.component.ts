import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Retailer } from '../retailer';

@Component({
  selector: 'app-admin-retailer-view',
  templateUrl: './admin-retailer-view.component.html',
  styleUrls: ['./admin-retailer-view.component.css']
})
export class AdminRetailerViewComponent implements OnInit {
  public retailers:Retailer[]=[];
  constructor(private service:AdminService,public route:Router) { }

  ngOnInit(): void {
    this.service.GetRetailers().subscribe((data:Retailer[])=>{
    console.log(data)
    this.retailers=data
    }
    )
  }
  DeleteOneData(email:any)
  {
    this.service.DeleteRetailer(email).subscribe();
    this.ngOnInit();
    this.route.navigateByUrl('/AdminRetailerDetails');
  }

}
