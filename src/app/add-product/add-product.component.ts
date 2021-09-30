import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ProductForm!: FormGroup;
  ProductImages!:FormArray;

  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.ProductForm = this.formBuilder.group( {
      ProductName: new FormControl("", [Validators.required]),
      BrandName: new FormControl("", [Validators.required]),
      PricePerUnit: new FormControl("", [Validators.required]),
      Description: new FormControl("", [Validators.required]),
      Quantity: new FormControl("", [Validators.required]),
      CategoryId: new FormControl("", [Validators.required]),
      ProductImages: this.formBuilder.array( [  ] )

    } )
  }

  SubmitForm(){

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

}
