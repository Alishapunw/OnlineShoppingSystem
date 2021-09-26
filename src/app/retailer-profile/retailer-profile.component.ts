import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})
export class RetailerProfileComponent implements OnInit {

  RetailerProducts?:Product[]=[
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
