import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.css']
})
export class NavpageComponent implements OnInit {
  public total:number=0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe((res:any)=>
    {
      this.total=res.length;
    })
  }

}
