import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { ProductserviceService } from 'src/app/productservice.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.css']
})
export class NavpageComponent implements OnInit {
  public total:number=0;
  public searchTerm:string='';
  message:boolean=false;
  constructor(private cart:CartService ,public service:ProductserviceService,public auth:AuthenticationService, public router:Router) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe((res:any)=>
    {
      this.total=res.length;
      
    })
this.auth.recievedStatus().subscribe((data:any)=>{
  this.message=data;
})
  }
  logout()
  {
    console.log("hi");
    sessionStorage.removeItem('Email');
    sessionStorage.clear();
    this.auth.subject.next(false);
    //this.message=false;
    this.router.navigate(['Login']); 
  } 
  search(event:any)
  {
    this.searchTerm=(event.target as HTMLInputElement ).value;
    console.log(this.searchTerm);
    this.service.search.next(this.searchTerm);
  }

}
