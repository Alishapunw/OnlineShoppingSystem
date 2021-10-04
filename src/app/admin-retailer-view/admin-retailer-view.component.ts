import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../admin.service';
import { Retailer } from '../retailer';

@Component({
  selector: 'app-admin-retailer-view',
  templateUrl: './admin-retailer-view.component.html',
  styleUrls: ['./admin-retailer-view.component.css']
})
export class AdminRetailerViewComponent implements OnInit {
  public retailers: Retailer[] = [];
  constructor(private service: AdminService, public route: Router, private spinner: NgxSpinnerService) { }

  async ngOnInit() {
    this.spinner.show();

   /* this.service.GetRetailers().subscribe((data: Retailer[]) => {
      console.log(data)
      this.retailers = data
    }
    )*/

    const getretailerpromise = await this.service.GetRetailers().toPromise();
    this.retailers = getretailerpromise;
    this.spinner.hide();
  }


  async DeleteOneData(email: any) {
    this.spinner.show();
    await this.service.DeleteRetailer(email).toPromise();
    this.ngOnInit();
    this.spinner.hide();
  }

}
