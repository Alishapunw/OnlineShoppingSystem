import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartClass } from './cart';
import { Product } from './product';
import { ProductCart } from './product-cart';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {


  private url = 'http://localhost:65061/api/Carts';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  productcart!: ProductCart[]
  /* private cartSource = new BehaviorSubject<ProductCart | null>(null);
   cart$ = this.cartSource.asObservable();*/
  constructor(private http: HttpClient) { }



  AddtoCart(product: Product, LoggedInUserEmail: string) {
    this.http.get(this.url + "/GetCartByUserEmail/" + LoggedInUserEmail).subscribe((data: any) => {
      if (data["CartCreatedorExists"] == true) {
        console.log("CartCreated");
        this.http.post(this.url + "/AddProductToCart/" + LoggedInUserEmail, JSON.stringify(product), this.httpOptions).subscribe((data: any) => {
          if (data["AddedProduct"] == true) {
            console.log("AddedProduct");
          }
          else {
            console.log("Not AddedProduct");
          }
        })
      }
      else if (data["CartCreatedorExists"] == false) {
        console.log("CartNotCreated");
      }
      else {
        console.log("In else");
      }
    });

  }


}
