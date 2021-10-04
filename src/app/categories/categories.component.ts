import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
import { Product } from '../product';
import { ProductCartService } from '../product-cart.service';
import { ProductserviceService } from '../productservice.service';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesList: Category[] = [];
  allproductsList: Product[] = [];
  currentproductsList: Product[] = [];
  p: number = 1;

  selectedSort:string = "priceAsc";

  selectedCategotyId: number = 0;

  sortOptions = [
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];


  constructor(public cs: CategoriesService, public ps: ProductserviceService , public carts:ProductCartService, public router:Router,  public wls:WishlistService,  private spinner: NgxSpinnerService) { }

  async ngOnInit() {

    this.spinner.show();

  
    const categoriespromise = await this.cs.getCategories().toPromise();
    this.categoriesList = [{ categoryId: 0, categoryName: 'All' }, ...categoriespromise]

    const productpromise = await this.ps.getProducts().toPromise();
    this.allproductsList = productpromise;
    this.currentproductsList=productpromise;
    this.currentproductsList.sort((a, b) => (a.pricePerUnit < b.pricePerUnit ? -1 : 1));


    this.spinner.hide();


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


  addProductToCart(product:Product){
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        this.carts.AddtoCart(product, LoggedInUserEmail)
    }
  }


  sortProducts(value:string){
    if(value === "priceAsc" ){
      this.currentproductsList.sort((a, b) => (a.pricePerUnit < b.pricePerUnit ? -1 : 1));
    }
    else if(value === "priceDesc"){
      this.currentproductsList.sort((a, b) => (a.pricePerUnit > b.pricePerUnit ? -1 : 1));

    }
  }

  addProductToWishlist(productId:number){
    var LoggedInUserEmail = localStorage.getItem("Email");
    console.log(LoggedInUserEmail);  
    if(LoggedInUserEmail == null){
        this.router.navigateByUrl("/Login")
    }
    else{
        this.wls.AddtoWishlist(productId, LoggedInUserEmail)
    }
  }

}



 /* this.cs.getCategories().subscribe((data) => {
      this.categoriesList = [{ categoryId: 0, categoryName: 'All' }, ...data];;
      console.log(data);
    });*/

    
    /*this.ps.getProducts().subscribe((pl: Product[]) => {
      console.log(pl);
      this.allproductsList = pl;
      this.currentproductsList = pl;
      this.currentproductsList.sort((a, b) => (a.pricePerUnit < b.pricePerUnit ? -1 : 1));
    })*/