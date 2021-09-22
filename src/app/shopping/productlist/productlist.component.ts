import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private service:ProductserviceService) { }
  productList:Product[]=[];
  ngOnInit(): void {
    this.productList=this.service.getProducts();
  }

}
