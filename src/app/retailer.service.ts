import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddProduct } from './add-product';
import { Product } from './product';
import { ProductImages } from './product-images';
import { Retailer } from './retailer';
import { Retailer1 } from './retailer1';

@Injectable({
  providedIn: 'root'
})
export class RetailerService 
{
  public RetailerProducts:Product[]=[]
  private url="http://localhost:65061/api/retailers";
  private url1="http://localhost:65061/api/products";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  constructor(public httpClient:HttpClient) { }

  getRetailerProducts(id:number):Observable<Product[]>{
    var a = this.httpClient.get<Product[]>(this.url+"/xyz/"+id).pipe(
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


  // GetRetailer(id:number):Observable<Product[]>
  // {
  //   return this.httpClient.get<Product[]>(this.url+'/abcd/'+id);
  // }
  GetRetailerByEmail(email:string)
  {
    return  this.httpClient.get<Retailer1>(this.url+'/retailerbyemail/'+email);
  }
  AddProduct(product:Product)
  {
    return this.httpClient.post(this.url+"/AddProducts",JSON.stringify(product),this.httpOptions);
  }

  GetProductByID(id:number){
    return this.httpClient.get(this.url1+'/getProductById/'+id);
  }
  UpdateProduct(id:number,product:Product)
  {
    return this.httpClient.put(this.url1+'/EditProduct/'+id,JSON.stringify(product),this.httpOptions);
  }
}
