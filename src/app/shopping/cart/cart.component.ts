import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // product: any;

  id!:number;
  public quantity:number=1;
  public productList:any=[];
  public carttotal:number=0;
  
  constructor(private cart:CartService) { }


  ngOnInit(): void {
    /*
    this.cart.getProducts().subscribe(res=>
      {
        this.productList=res;
        this.carttotal=this.cart.getTotalPrice();
      })
    }
    removeItem(product:any)
    {
      this.cart.removeCartItem(product);
    }
    emptyCart()
    {
      this.cart.removeAllCart();
    }*/
}





// id:number=ProductId,
        // quantity:1,
        // productName:this.product.ProductName,
        // price:this.product.PricePerUnit
}