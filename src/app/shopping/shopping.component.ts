import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrdersService } from '../orders.service';
import { ProductCart } from '../product-cart';
import { ProductCartService } from '../product-cart.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  LoggedInUserEmail: any = ""
  IsLoading: boolean = false;


  productList: ProductCart[] = [];

  constructor(private cs: CartService,public o:OrdersService, private spinner: NgxSpinnerService) { }

  async ngOnInit() {
    this.spinner.show();


    this.LoggedInUserEmail = localStorage.getItem("Email");


    const productpromise= await  this.cs.getProducts(this.LoggedInUserEmail).toPromise();
    this.productList = productpromise;


    this.spinner.hide();
  }

  async DeleteProductCart(Id: number) {
    this.spinner.show();
    await this.cs.DeleteProductCartItem(Id).toPromise();
    this.ngOnInit();
    this.spinner.hide();


  }

  async incrementItem(Id: number) {
    this.spinner.show();
    await this.cs.increaseProductCartItem(Id).toPromise();
    this.ngOnInit();
    this.spinner.hide();
  }

  async decrementItem(Id: number) {
    this.spinner.show();
    await this.cs.decreaseProductCartItem(Id).toPromise();
    this.ngOnInit();
    this.spinner.hide();

    
  }



}



/* this.cs.getProducts(this.LoggedInUserEmail).subscribe((data: ProductCart[]) => {
      this.productList = data;
      
    })*/