import { Component, OnInit } from '@angular/core';
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

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.IsLoading = true;

    this.LoggedInUserEmail = localStorage.getItem("Email");
    this.cs.getProducts(this.LoggedInUserEmail).subscribe((data: ProductCart[]) => {
      this.productList = data;
      console.log("data");
      console.log(data);
      console.log("data");
    })

    this.IsLoading = false;


  }

  async DeleteProductCart(Id: number) {
    this.IsLoading = true;
    await this.cs.DeleteProductCartItem(Id).toPromise();
    this.ngOnInit();
    this.IsLoading = false;

  }

  async incrementItem(Id: number) {
    this.IsLoading = true;
    await this.cs.increaseProductCartItem(Id).toPromise();
    this.ngOnInit();
    this.IsLoading = false;
  }

  async decrementItem(Id: number) {
    this.IsLoading = true;
    await this.cs.decreaseProductCartItem(Id).toPromise();
    this.ngOnInit();
    this.IsLoading = false;

  }


}
