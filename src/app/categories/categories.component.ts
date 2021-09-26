import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesList: Category[] = [];
  productsList: Product[] = [];

  sortOptions = [
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc'},
    { name: 'Alphabetical', value: 'name' }
  ];


  constructor(public cs:CategoriesService, public ps:ProductserviceService) { }

  ngOnInit(): void {
    this.cs.getCategories().subscribe( (data) =>{
           this.categoriesList =data;
           console.log(data);
           
      } );

     /* this.ps.getProducts().subscribe( (data) =>{
           this.productsList =data;
           console.log(data);
           
      } );*/
  }

}
