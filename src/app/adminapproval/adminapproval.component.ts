import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../admin.service';
import { Product } from '../product';

@Component({
  selector: 'app-adminapproval',
  templateUrl: './adminapproval.component.html',
  styleUrls: ['./adminapproval.component.css']
})
export class AdminapprovalComponent implements OnInit {
  products: Product[] = [];
  status: boolean = false;
  text: string = "Not Approved";
  constructor(public service: AdminService, private spinner: NgxSpinnerService) { }

  async ngOnInit() {
    this.spinner.show();

    /*this.service.GetAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    })*/
    const promise = await this.service.GetAllProducts().toPromise();
    this.products = promise;


    this.spinner.hide();

  }

  async ApproveProduct(id: number) {
    this.spinner.show();

    /*this.service.Approve(id).subscribe((data: any) => {
      console.log(data);
    });*/

    await this.service.Approve(id).toPromise();
    this.ngOnInit()

    this.spinner.hide();

  }

}

// State()
  // {
  //   if(this.status==true)
  //   {
  //     this.text="Approved"
  //   }
  //   else
  //   {
  //     this.text="Not Approved"
  //   }
  // }