import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from 'src/app/productservice.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any;

  constructor(private ser: ProductserviceService,private cart:CartService) { }

  ngOnInit(): void {
    this.productList=this.ser.getProducts();
    this.productList.foreach((a:any)=>
    {
      Object.assign(a,{quantity:1,total:a.price})
    });
  }
  AddtoCart(item:any)
  {
    this.cart.AddtoCart(item);
  }
}
