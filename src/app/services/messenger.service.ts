import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject=new Subject();
  constructor() { }
  // product!:any;
  getMessage()
  {
    return this.subject.asObservable();
  }
  sendMessage(product: Product)
  {
    // console.log(product);
    this.subject.next(product);
  }
}
