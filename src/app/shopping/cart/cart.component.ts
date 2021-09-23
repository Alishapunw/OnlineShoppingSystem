import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // product: any;

  id!:number;

  
  constructor(private msg:MessengerService) { }
  cartItems=[
    // {id:1,quantity:1,productName:'Two',price:1000},
    // {id:2,quantity:2,productName:'Three',price:150},
    // {id:3,quantity:4,productName:'One',price:100},
    // {id:4,quantity:6,productName:'Four',price:1410}
  ];
  // product!:Product;
  cartTotal=0;
  ngOnInit(): void {
    // this.msg.getMessage().subscribe(
    // this.cartItems.forEach(item=>
    //   {
    //     // this.cartTotal+=(item.quantity*item.price)
    //   })
    }
}





// id:number=ProductId,
        // quantity:1,
        // productName:this.product.ProductName,
        // price:this.product.PricePerUnit
