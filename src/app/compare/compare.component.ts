import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  categoriesList: Category[] = [];
  productList:Product[]=[];
  currentproductsList: Product[] = [];
  allproductsList: Product[] = [];
  selectedCategotyId: number = 2;
  constructor(public cs: CategoriesService, public ps:ProductserviceService) { }

  ngOnInit(): void {
    this.cs.getCategories().subscribe((data) => {
      this.categoriesList = data;
      console.log(data);
    });

    this.ps.getProducts().subscribe((data)=>{
      this.allproductsList=data;
      console.log(this.allproductsList);
    })
  }
  changeCategory(cId: number) {
    console.log(cId);
    this.selectedCategotyId = cId;
    if(cId == 0){
      this.currentproductsList = this.allproductsList;
    }
    else{
      this.currentproductsList = [];
      this.allproductsList.forEach(element => {
        if(element.categoryId==cId){
        this.currentproductsList.push( element );
        }
      });
    }
  }
}
