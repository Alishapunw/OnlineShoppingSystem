import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category';
<<<<<<< HEAD
import { RetailerService } from '../retailer.service';
import { Retailer1 } from '../retailer1';
=======
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { RetailerService } from '../retailer.service';
import { Retailer1 } from '../retailer1';
>>>>>>> 2a15cfe9ad8c5baaaa2f00f1f03e64d4c285575a

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  ProductForm!: FormGroup;
  ProductImages!:FormArray;
  email?:any;
  retailer?:Retailer1;
  id?:number;
  categoriesList: Category[] = [];
  fileToUpload1: any;
  fileToUpload2: any;
  fileToUpload3: any;
  fileToUpload4: any;


  constructor( private formBuilder:FormBuilder, public service:RetailerService,public cs: CategoriesService,public route:Router, public http:HttpClient) { }

  ngOnInit(): void {

    this.cs.getCategories().subscribe((data:any) => {
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

    //this.addNewProductImageField();
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

   handleFileInput1(e: any) {
    this.fileToUpload1 = e?.target?.files[0];
  }

   handleFileInput2(e: any) {
    this.fileToUpload2 = e?.target?.files[0];
  }

   handleFileInput3(e: any) {
    this.fileToUpload3 = e?.target?.files[0];
  }

   handleFileInput4(e: any) {
    this.fileToUpload4 = e?.target?.files[0];
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
    const formData: FormData = new FormData();
    formData.append('productName', this.ProductForm.value["ProductName"]); 
    formData.append('brandName', this.ProductForm.value["BrandName"]); 
    formData.append('pricePerUnit', this.ProductForm.value["PricePerUnit"]); 
    formData.append('description', this.ProductForm.value["Description"]); 
    formData.append('quantity', this.ProductForm.value["Quantity"]); 
    formData.append('categoryId', this.ProductForm.value["CategoryId"]); 
    formData.append('retailerId', this.ProductForm.value["RetailerId"]); 
    formData.append('myFile1', this.fileToUpload1); 
    formData.append('myFile2', this.fileToUpload2); 
    formData.append('myFile3', this.fileToUpload3); 
    formData.append('myFile4', this.fileToUpload4); 

    return this.http.post('http://localhost:65061/api/retailers/AddProducts', formData, {  headers : new HttpHeaders()  }).subscribe( (data) => {  alert("File uploaded"); console.log(data) }) ;




    /*this.service.AddProduct(this.ProductForm.value).subscribe((data:any)=>
    {
      console.log(data);
      this.route.navigateByUrl("/RetailerHome");
    }) */

  })

  }
  

}


// Email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
//     Password: new FormControl("", [Validators.required, Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
//     ConfirmPassword: new FormControl("", [Validators.required, Validators.pattern("[A-Z](?=.*[a-z0-9A-Z])(?=.*?[!@#\$&*~]).{7,15}$")]),
//     phoneNumber: new FormControl("", [Validators.required, Validators.pattern("[789][0-9]{9}")]),