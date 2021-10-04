import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { CartService } from '../services/cart.service';
import { FilterPipe } from '../filter.pipe';
import { ProductCartService } from '../product-cart.service';
import { WishlistService } from '../wishlist.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allProducts:Product[] = [];
  laptopProducts:Product[] = [];
  mobileProducts:Product[] = [];
  shoesProducts:Product[] = [];
  mensshirtsProducts:Product[] = [];
  ItopProducts:Product[] = [];
  oneProduct!:Product;
  searchKey:string="";
  p: number = 1;

  

  constructor(public ps:ProductserviceService, public carts:ProductCartService, public router:Router, public wls:WishlistService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  async ngOnInit() {

    /*  console.log("OSGS");  */

     this.spinner.show();

    const promise= await this.ps.getProducts().toPromise();

    this.allProducts = promise

     this.allProducts.forEach(element => {
      if (element.categoryId==2) {
        this.laptopProducts.push(element);
      }
      else if (element.categoryId==8) {
        this.shoesProducts.push(element);
      }
      else if (element.categoryId==9) {
        this.mensshirtsProducts.push(element);
      }
   });
    this.ps.search.subscribe((val:any)=>{
      this.searchKey=val;
    })

   
      this.spinner.hide();

       
}

 addProductToCart(product:Product){
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        this.carts.AddtoCart(product, LoggedInUserEmail);
this.toastr.success('Added to cart', '' ,{
  timeOut: 2000,
  positionClass	: "toast-bottom-right"
});
  
    }
    //this.carts.AddtoCart(product)
  }


  addProductToWishlist(productId:number){
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        this.wls.AddtoWishlist(productId, LoggedInUserEmail);
        this.toastr.success('Added to wishlist', '' ,{
  timeOut: 2000,
  positionClass	: "toast-bottom-right"
});
    }
    //this.carts.AddtoCart(product)
  }
  
  


}



 

    /*this.ps.getProducts().subscribe( (pl:Product[]) => {
    console.log(pl);
    this.allProducts = pl;

    pl.forEach(element => {
      if (element.categoryId==2) {
        this.laptopProducts.push(element);
      }
      else if (element.categoryId==8) {
        this.shoesProducts.push(element);
      }
      else if (element.categoryId==9) {
        this.mensshirtsProducts.push(element);
      }
    });
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    })  */
