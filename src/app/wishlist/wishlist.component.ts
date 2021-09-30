import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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



  constructor(private ws: WishlistService, public router:Router, public carts:ProductCartService) { }

  ngOnInit(): void {
    this.IsLoading = true;

    this.LoggedInUserEmail = localStorage.getItem("Email");
    this.ws.getWishListedProductsByEmail(this.LoggedInUserEmail).subscribe((data: Wishlist[]) => {
      this.wishList = data;
      console.log("data");
      
      console.log(this.wishList );
      console.log("data");
    })

    this.IsLoading = false;

  }

  async DeleteProductFromWishlist(productId:number){
    this.IsLoading = true;
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        await this.ws.DeleteProductFromWishlist(productId, LoggedInUserEmail).toPromise(  )
        this.ngOnInit();
    }

    this.IsLoading = false;
    
  }

  async addProductToCart(product:Product){
    this.IsLoading = true;

    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        await this.carts.AddtoCartAsyncMethod(product, LoggedInUserEmail).toPromise(  )
        this.ngOnInit();
    }
    //this.carts.AddtoCart(product)
    this.IsLoading = true;
    this.IsLoading = false;

  }

}
