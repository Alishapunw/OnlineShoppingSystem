import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { ProductCart } from '../product-cart';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  LoggedInUserEmail: any = ""
  IsLoading: boolean = false;
  private value:any;  
  total=0;

  orderPlacingStatus:any;
 
  productList: ProductCart[] = [];

  constructor(public o:OrdersService,private cs: CartService, private router:Router) { }

  ngOnInit(): void {
    this.IsLoading = true;

    this.LoggedInUserEmail = localStorage.getItem("Email");
    this.cs.getProducts(this.LoggedInUserEmail).subscribe((data: ProductCart[]) => {
      this.productList = data;
      console.log("data");
      console.log(data);
      console.log("data");
      this.findsum(this.productList); 
    })

    this.IsLoading = false;

  }
  findsum(data:ProductCart[]){    
    this.value=data    
    console.log("Inside Sum function")
    console.log(this.value);  
    console.log("Inside Sum function")
    for(let j=0;j<data.length;j++){   
         this.total+= this.value[j].amount 
         console.log(this.total)  

    }  
  }


  async CreateOrder(p:number){  
    this.orderPlacingStatus = await this.o.PostOrderbyCartID(p).toPromise();
    console.log(this.orderPlacingStatus);
    if(this.orderPlacingStatus["OrderPlaced"] === true ){
      this.router.navigateByUrl("/OrderSuccesful")
    }
    else{
      alert("Failed")
    }
    
  }
}
