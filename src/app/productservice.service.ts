import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';
import {  pipe, of, forkJoin } from 'rxjs/index'
import { ProductImages } from './product-images';
import { IProduct } from './iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private url= 'http://localhost:65061/api/Products';

  constructor(private client:HttpClient) { }

  
  getProducts():Observable<Product[]>{
    var a = this.client.get<Product[]>(this.url+"/GetAllProducts").pipe(
     map(Allproducts  => Allproducts.map( productJson  =>  
      new Product(productJson.productId,
         productJson.productName, 
         productJson.brandName, 
         productJson.pricePerUnit, 
         productJson.description,
         productJson.quantity,
         productJson.categoryId, 
         productJson.retailerId, 
         productJson.status,
          productJson.productImages.map( imageJSON  =>  new ProductImages(imageJSON.productId, imageJSON.imagePath) 
          ))  )   )
   )
    return a;
  }

  /* getIProducts():Observable<IProduct[]>{
        return this.client.get<IProduct[]>(this.url+"/GetAllProducts");
  } */

  getProductById(id:number):Observable<Product>{
    return  this.client.get<Product>(this.url+"/getProductById/"+id);
  }
  

  getOneProduct():Observable<Product>{
    
   var a = this.client.get<Product>(this.url+"/GetOneProduct")
    return a;
  
  }
}


