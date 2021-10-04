import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../product';
import { ProductCartService } from '../product-cart.service';
import { Wishlist } from '../wishlist';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  IsLoading: boolean = false;

  wishList: Wishlist[] = [];
  LoggedInUserEmail: any = ""



  constructor(private ws: WishlistService, public router:Router, public carts:ProductCartService, private spinner: NgxSpinnerService) { }

  async ngOnInit() {
     this.spinner.show();


    this.LoggedInUserEmail = localStorage.getItem("Email");


    const wishlistpromise = await this.ws.getWishListedProductsByEmail(this.LoggedInUserEmail).toPromise();
    this.wishList = wishlistpromise;


    this.spinner.hide();


  }

  async DeleteProductFromWishlist(productId:number){
     this.spinner.show();
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        await this.ws.DeleteProductFromWishlist(productId, LoggedInUserEmail).toPromise(  )
        this.ngOnInit();
    }

    this.spinner.hide();
    
  }

  async addProductToCart(product:Product){
     this.spinner.show();

    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        await this.carts.AddtoCartAsyncMethod(product, LoggedInUserEmail).toPromise(  )
        this.ngOnInit();
    }
    this.spinner.hide();
  }

}






    /*this.ws.getWishListedProductsByEmail(this.LoggedInUserEmail).subscribe((data: Wishlist[]) => {
      this.wishList = data;
      console.log("data");
      
      console.log(this.wishList );
      console.log("data");
    })*/