import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from './wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlisturl = 'http://localhost:65061/api/Wishlists';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http:HttpClient) { }

  AddtoWishlist(productId: number, LoggedInUserEmail: string) {
    this.http.post(this.wishlisturl+'/' + LoggedInUserEmail + '/' + productId , this.httpOptions).subscribe((data: any) => {
          if (data["AddedProduct"] == true) {
            console.log("AddedProduct");
          }
          else {
            console.log("Not AddedProduct");
          }
        })
  }
  

  getWishListedProductsByEmail(LoggedInUserEmail:string):Observable<Wishlist[]>{
    return this.http.get<Wishlist[]>(this.wishlisturl+"/getWishListedProductsByEmail/"+LoggedInUserEmail);
  }

  DeleteProductFromWishlist(productId:number, LoggedInUserEmail:string){
    return this.http.delete(this.wishlisturl+"/"+LoggedInUserEmail+"/"+productId);
  }
}
