import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { CartService } from '../services/cart.service';
import { FilterPipe } from '../filter.pipe';
import { ProductCartService } from '../product-cart.service';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  topProducts:Product[] = [];
  ItopProducts:Product[] = [];
  oneProduct!:Product;
  searchKey:string="";
  

  constructor(public ps:ProductserviceService, public carts:ProductCartService, public router:Router, public wls:WishlistService) { }

  ngOnInit(): void {

    /*  console.log("OSGS");  */

    this.ps.getProducts().subscribe( (pl:Product[]) => {
    console.log(pl);
    this.topProducts = pl;
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    })

    /* this.ps.getIProducts().subscribe( (Ipl:IProduct[]) => {
    console.log(Ipl);

      this.ItopProducts = Ipl;
    } )  */
    this.ps.search.subscribe((val:any)=>{
      this.searchKey=val;
    })

   

  
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


  addProductToWishlist(productId:number){
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        this.wls.AddtoWishlist(productId, LoggedInUserEmail)
    }
    //this.carts.AddtoCart(product)
  }
  
  


}
