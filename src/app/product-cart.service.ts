import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { ProductCart } from './product-cart';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  productcart!:ProductCart[]
 // private basketSource = new BehaviorSubject<ProductCart>(null);
 // basket$ = this.basketSource.asObservable();
  constructor() { }

 /* AddtoCart(product:Product){
this.productcart.push(new ProductCart(product.productId,product.quantity,product.pricePerUnit));
console.log(this.productcart);

  } */

  private mapProductToCart(p:Product,quantity:number):ProductCart{
    return {
     productId:p.productId,
     amount:p.pricePerUnit,
    };
  }
/*
  addProductToCart(item:Product,quantity=1){
  const itemToAdd:ProductCart=this.mapProductToCart(item,quantity);
  const basket=this.getCurrentBasketValue() ?? this.
  }

  getCurrentBasketValue() {
    return this.basketSource.value;
  }

  private createBasket():  {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }
  */
}
