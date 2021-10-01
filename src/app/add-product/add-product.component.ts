import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  AddProductForm:FormGroup = new FormGroup({
    ProductName: new FormControl("", [Validators.required]),
    BrandName: new FormControl("", [Validators.required]),
    Description: new FormControl("", [Validators.required]),
    PricePerUnit: new FormControl("", [Validators.required]),
    Quantity: new FormControl("", [Validators.required]),
    CategoryId:new FormControl("",[Validators.required])
    
  })
  constructor(public service:RetailerService,public route:Router) { }


  ngOnInit(): void {
  }

  get ProductName()
  {
    return this.AddProductForm.get('ProductName');
  }
  get BrandName()
  {
    return this.AddProductForm.get('BrandName');
  }
  get Description()
  {
    return this.AddProductForm.get('Description');
  }
  get PricePerUnit()
  {
    return this.AddProductForm.get('PricePerUnit');
  }
  get Quantity()
  {
    return this.AddProductForm.get('Quantity');
  }
  get CategoryId()
  {
    return this.AddProductForm.get('CategoryId');
  }
  SubmitProduct()
  {
    this.service.AddProduct(this.AddProductForm.value).subscribe((data:any)=>
    {
      console.log(data);
      this.route.navigateByUrl("../RetailerHome");
    })

  }

}


// Email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
//     Password: new FormControl("", [Validators.required, Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
//     ConfirmPassword: new FormControl("", [Validators.required, Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
//     phoneNumber: new FormControl("", [Validators.required, Validators.pattern("[789][0-9]{9}")]),