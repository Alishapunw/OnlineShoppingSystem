import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { Product } from '../product';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  //EditProductForm!: FormGroup;
  product?:Product;
  ProductImages!:FormArray;
  categoriesList: Category[] = [];

  EditProductForm=new FormGroup({
    ProductName: new FormControl(""),
    BrandName: new FormControl(""),
    PricePerUnit: new FormControl(""),
    Description: new FormControl(""),
    Quantity: new FormControl(""),
    CategoryId: new FormControl("")
  });

  constructor(private formBuilder:FormBuilder,private router:ActivatedRoute, public service:RetailerService,public route:Router) { }

  ngOnInit(): void {

    this.service.GetProductByID(this.router.snapshot.params['productId']).subscribe((data:any)=>
    this.EditProductForm=new FormGroup({
      ProductName: new FormControl(data["productName"]),
      BrandName: new FormControl(data["brandName"]),
      PricePerUnit: new FormControl(data["pricePerUnit"]),
      Description: new FormControl(data["description"]),
      Quantity: new FormControl(data["quantity"])
      //ProductImages: this.formBuilder.array( [  ] )   
    })       
    )
  }
  get ProductName()
  {
    return this.EditProductForm.get('ProductName');
  }
  get BrandName()
  {
    return this.EditProductForm.get('BrandName');
  }
  get Description()
  {
    return this.EditProductForm.get('Description');
  }
  get PricePerUnit()
  {
    return this.EditProductForm.get('PricePerUnit');
  }
  get Quantity()
  {
    return this.EditProductForm.get('Quantity');
  }
  

  EditProduct(){
      this.service.UpdateProduct(this.router.snapshot.params['productId'],this.EditProductForm.value).subscribe((data:any)=>{
        console.log(data);
      });
      this.route.navigateByUrl("/RetailerHome");
  }

}
