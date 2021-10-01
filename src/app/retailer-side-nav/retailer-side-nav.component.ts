import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer-side-nav',
  templateUrl: './retailer-side-nav.component.html',
  styleUrls: ['./retailer-side-nav.component.css']
})
export class RetailerSideNavComponent implements OnInit {
  // [x: string]: any;
  email:any;
  constructor() { }

  ngOnInit(): void {
    this.email=localStorage.getItem("Email");
  }


}
