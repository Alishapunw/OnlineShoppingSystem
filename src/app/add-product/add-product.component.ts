import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { RetailerService } from '../retailer.service';
import { Retailer1 } from '../retailer1';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  /*AddProductForm:FormGroup = new FormGroup({
    ProductName: new FormControl("", [Validators.required]),
    BrandName: new FormControl("", [Validators.required]),
    Description: new FormControl("", [Validators.required]),
    PricePerUnit: new FormControl("", [Validators.required]),
    Quantity: new FormControl("", [Validators.required]),
    CategoryId:new FormControl("",[Validators.required])
    //ProductImages: this.formBuilder.array( [  ] )
    
  })*/

  // constructor(public service:RetailerService,public route:Router) { }

  ProductForm!: FormGroup;
  ProductImages!:FormArray;
  email?:any;
  retailer?:Retailer1;
  id?:number;
  categoriesList: Category[] = [];

  constructor( private formBuilder:FormBuilder, public service:RetailerService,public cs: CategoriesService,public route:Router) { }

  ngOnInit(): void {

    this.cs.getCategories().subscribe((data) => {
      this.categoriesList = data;
      console.log(data);
    });

    this.ProductForm = this.formBuilder.group( {
      ProductName: new FormControl(""),
      BrandName: new FormControl(""),
      PricePerUnit: new FormControl(""),
      Description: new FormControl(""),
      Quantity: new FormControl(""),
      CategoryId: new FormControl(""),
      RetailerId: new FormControl(""),
      //ProductImages: this.formBuilder.array( [  ] )

    } )
  }

  createNewProductImageField(){
    return this.formBuilder.control("")
  }

  getAllProductImages(){
    return this.ProductForm.get("ProductImages") as FormArray;
  }

  addNewProductImageField():void{
    this.ProductImages = this.ProductForm.get("ProductImages") as FormArray;
    this.ProductImages.push( this.createNewProductImageField() );
  }

  get ProductName()
  {
    return this.ProductForm.get('ProductName');
  }
  get BrandName()
  {
    return this.ProductForm.get('BrandName');
  }
  get Description()
  {
    return this.ProductForm.get('Description');
  }
  get PricePerUnit()
  {
    return this.ProductForm.get('PricePerUnit');
  }
  get Quantity()
  {
    return this.ProductForm.get('Quantity');
  }
  get CategoryId()
  {
    return this.ProductForm.get('CategoryId');
  }
  get RetailerId()
  {
    return this.ProductForm.get('CategoryId');
  }

  
  SubmitProduct()
  {
    console.log(this.ProductForm.value);
    this.email=localStorage.getItem("Email");
    this.service.GetRetailerByEmail(this.email).subscribe((data:Retailer1)=>
    {
      console.log(data);
      this.retailer=data;
      this.id=this.retailer.retailerId;
      console.log(this.id);

    this.ProductForm.controls["RetailerId"].setValue(this.id);
    this.ProductForm.controls["CategoryId"].setValue( parseInt(this.ProductForm.value["CategoryId"]  ) )
    this.service.AddProduct(this.ProductForm.value).subscribe((data:any)=>
    {
      console.log(data);
      this.route.navigateByUrl("/RetailerHome");
    })

  })

  }
  

}


// Email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
//     Password: new FormControl("", [Validators.required, Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
//     ConfirmPassword: new FormControl("", [Validators.required, Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
//     phoneNumber: new FormControl("", [Validators.required, Validators.pattern("[789][0-9]{9}")]),