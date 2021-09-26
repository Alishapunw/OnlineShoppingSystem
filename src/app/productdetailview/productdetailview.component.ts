import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productdetailview',
  templateUrl: './productdetailview.component.html',
  styleUrls: ['./productdetailview.component.css']
})
export class ProductdetailviewComponent implements OnInit {



  currentProduct!:Product;

  ProductId!:number ;
  

  constructor(public router:ActivatedRoute, public ps:ProductserviceService) { }

  ngOnInit(): void {
    this.ProductId = this.router.snapshot.params["ProductId"];
    this.ps.getProductById()
  }


}