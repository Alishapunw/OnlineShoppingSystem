import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { Product } from '../product';
import { ProductCartService } from '../product-cart.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  topProducts:Product[] = [];
  ItopProducts:Product[] = [];
  oneProduct!:Product;

  constructor(public ps:ProductserviceService, public carts:ProductCartService) { }

  ngOnInit(): void {

    /*  console.log("OSGS");  */

    this.ps.getProducts().subscribe( (pl:Product[]) => {
    console.log(pl);
    this.topProducts = pl;
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

    } ) 


    /* this.ps.getIProducts().subscribe( (Ipl:IProduct[]) => {
    console.log(Ipl);

      this.ItopProducts = Ipl;
    } )  */

  }

  addtocart(product:Product){
this.carts.AddtoCart(product)
  }
}
