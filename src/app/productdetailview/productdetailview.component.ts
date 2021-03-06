import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { WishlistService } from '../wishlist.service';
import { ProductCartService } from '../product-cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetailview',
  templateUrl: './productdetailview.component.html',
  styleUrls: ['./productdetailview.component.css']
})
export class ProductdetailviewComponent implements OnInit {


  currentProduct!:Product;

  constructor(public router:ActivatedRoute, public ps:ProductserviceService, public router2:Router, public wls:WishlistService, public carts:ProductCartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ps.getProductById(this.router.snapshot.params["ProductId"]).subscribe( (product:Product) => {
      this.currentProduct=product;
      console.log(this.currentProduct);
    });
  }


  addProductToWishlist(productId:number){
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router2.navigateByUrl("/Login")
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


  addProductToCart(product:Product){
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router2.navigateByUrl("/Login")
    }
    else{
        this.carts.AddtoCart(product, LoggedInUserEmail);
        this.toastr.success('Added to Cart', '' ,{
  timeOut: 2000,
  positionClass	: "toast-bottom-right"
});
    }
    //this.carts.AddtoCart(product)
  }
  

}