import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Product } from '../product';

@Component({
  selector: 'app-adminapproval',
  templateUrl: './adminapproval.component.html',
  styleUrls: ['./adminapproval.component.css']
})
export class AdminapprovalComponent implements OnInit {
  products:Product[]=[];
  status:boolean=false;
  text:string="Not Approved";
  constructor(public service:AdminService) { }

  ngOnInit(): void {
    this.service.GetAllProducts().subscribe((data:Product[])=>
    {
      this.products=data;
    })
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
  ApproveProduct(id:number)
  {
    console.log(id);
    this.service.Approve(id).subscribe((data:any)=>
    {
      console.log(data);
    });
  }

}
