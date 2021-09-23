import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductserviceService } from 'src/app/productservice.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private service:ProductserviceService) { }
  productList:any;
  @Input() productItem:any
  ngOnInit(): void {
    this.productList=this.service.getProducts();
  }
  AddtoCart()
  {
    this.service.getProducts()
  }

}
