import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  products:Product[]=[
    new Product(1,"Phone",'One-Plus',25000,'One-Plus Nord CE',['assets/phone2.jpg']),
    new Product(2,"Phone",'One-Plus',25000,'One-Plus Nord CE',['assets/phone2.jpg']),
    new Product(3,"Phone",'One-Plus',25000,'One-Plus Nord CE',['assets/phone2.jpg']),
    new Product(4,"Phone",'One-Plus',25000,'One-Plus Nord CE',['assets/phone2.jpg']),
    new Product(5,"Phone",'One-Plus',25000,'One-Plus Nord CE',['assets/phone2.jpg']),
    new Product(6,"Phone",'One-Plus',25000,'One-Plus Nord CE',['assets/phone2.jpg']),
  ]
  constructor() { }
  getProducts():Product[]
  {
    return this.products;
  }
}