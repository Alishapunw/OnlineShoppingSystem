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
  currentproductsList: Product[] = [];
  allproductsList: Product[] = [];
  selectedCategotyId: number = 0;
  selectedProductId1:number=0;
  selectedProductId2:number=0;
  selectedProductId3:number=0;
  selectedProductId4:number=0;

  product1!:Product;
  product2!:Product;
  product3!:Product;
  product4!:Product;


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

  changeCategory(cId: string) {
    
    this.selectedCategotyId = parseInt(cId) ;
    if(this.selectedCategotyId == 0){
      this.currentproductsList = this.allproductsList;
    }
    else{
      this.currentproductsList = [];
      this.allproductsList.forEach(element => {
        if(element.categoryId==this.selectedCategotyId){
        this.currentproductsList.push( element );
        }
      });
    }
  }


changeProduct1(pId: number) {
  console.log(pId);
  this.selectedProductId1 = pId;
  this.allproductsList.forEach(element=> {
    if(element.productId==pId){
      this.product1=element;
  }
  });
}



changeProduct2(pId: number) {
  console.log(pId);
  this.selectedProductId2 = pId;
  this.allproductsList.forEach(element=> {
    if(element.productId==pId){
      this.product2=element;
  }
  });
}


changeProduct3(pId: number) {
  console.log(pId);
  this.selectedProductId3 = pId;
  this.allproductsList.forEach(element=> {
    if(element.productId==pId){
      this.product3=element;
  }
  });
}


changeProduct4(pId: number) {
  console.log(pId);
  this.selectedProductId4 = pId;
  this.allproductsList.forEach(element=> {
    if(element.productId==pId){
      this.product4=element;
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

