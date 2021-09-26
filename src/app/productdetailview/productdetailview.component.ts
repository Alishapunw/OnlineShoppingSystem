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

  constructor(public router:ActivatedRoute, public ps:ProductserviceService) { }

  ngOnInit(): void {
    this.ps.getProductById(this.router.snapshot.params["ProductId"]).subscribe( (product:Product) => {
      this.currentProduct=product;
      console.log(this.currentProduct);
    });
  }

}