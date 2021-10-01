import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { Product } from '../product';
import { ProductCartService } from '../product-cart.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  categoriesList: Category[] = [];
  productList:Product[]=[];
  currentproductsList: Product[] = [];
  allproductsList: Product[] = [];
  selectedCategotyId: number = 0;
  selectedProductId:number=0;
  p!:Product;


  constructor(public cs: CategoriesService, public ps:ProductserviceService,public router:Router,public carts:ProductCartService) { }

  ngOnInit(): void {
    this.cs.getCategories().subscribe((data) => {
      this.categoriesList = data;
      console.log(data);
    });

    this.ps.getProducts().subscribe((data)=>{
      this.allproductsList=data;
      console.log(this.allproductsList);
    })
  }
  changeCategory(cId: number) {
    console.log(cId);
    this.selectedCategotyId = cId;
    if(cId == 0){
      this.currentproductsList = this.allproductsList;
    }
    else{
      this.currentproductsList = [];
      this.allproductsList.forEach(element => {
        if(element.categoryId==cId){
        this.currentproductsList.push( element );
        }
      });
    }
  }


changeProduct(pId: number) {
  console.log(pId);
 
  this.selectedProductId = pId;
  this.allproductsList.forEach(element=> {
    if(element.productId==pId){
      this.p=element;
  }
  });
  
}

addProductToCart(product:Product){
  var LoggedInUserEmail = localStorage.getItem("Email");
  console.log(LoggedInUserEmail);  
  if(LoggedInUserEmail == null){
      this.router.navigateByUrl("/Login")
  }
  else{
      this.carts.AddtoCart(product, LoggedInUserEmail)
  }
  //this.carts.AddtoCart(product)
}
}

