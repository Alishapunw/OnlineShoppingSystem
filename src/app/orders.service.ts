import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private url = 'http://localhost:65061/api/Orders';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  Orders: any;
  constructor(public client:HttpClient) { }

  //Creating Orders
  PostOrderbyCartID(cartId:number)
  {
    return this.client.post(this.url+'/'+ cartId,JSON.stringify(cartId),this.httpOptions)
  }

  GetOrders():Observable<Orders[]> {
    return this.client.get<Orders[]>(this.url);
  }

}
