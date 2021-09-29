import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductCart } from '../product-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private url = 'http://localhost:65061/api/ProductCarts';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getProducts(LoggedInUserEmail:string):Observable<ProductCart[]>
  {
   return this.http.get<ProductCart[]>(this.url + "/GetProductCartByEmail/" + LoggedInUserEmail);
    //return this.productList.asObservable();
  }


  DeleteProductCartItem(Id:number){
    return this.http.delete(this.url + "/" + Id);
  }

  increaseProductCartItem(Id:number){
    return this.http.put(this.url + "/increaseProductCartItem/" + Id, this.httpOptions);
  }

  decreaseProductCartItem(Id:number){
    return this.http.put(this.url + "/decreaseProductCartItem/" + Id, this.httpOptions);
  }
  



  setProduct(product:any)
  {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  AddtoCart(product :any)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList) 
  }
  getTotalPrice():number
  {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>
    {
      grandTotal=grandTotal+a.PricePerUnit;
    })
    return grandTotal;
  }
  removeCartItem(product:any)
  {
    this.cartItemList.map((a:any, index:any)=>
    {
      if(product.id==a.id)
      {
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart()
  {
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }

}
