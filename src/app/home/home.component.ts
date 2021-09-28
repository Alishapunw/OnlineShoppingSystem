import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { CartService } from '../services/cart.service';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  topProducts:Product[] = [];
  ItopProducts:Product[] = [];
  oneProduct!:Product;
  searchKey:string="";
  

  constructor(public ps:ProductserviceService,public cart:CartService) { }

  ngOnInit(): void {

    /*  console.log("OSGS");  */

    this.ps.getProducts().subscribe( (pl:Product[]) => {
    console.log(pl);
    this.topProducts = pl;
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    })

    /* this.ps.getIProducts().subscribe( (Ipl:IProduct[]) => {
    console.log(Ipl);

      this.ItopProducts = Ipl;
    } )  */
    this.ps.search.subscribe((val:any)=>{
      this.searchKey=val;
    })

   

  }
  addtocart(p:any)
  {
    return this.cart.AddtoCart(p);
  }
}
