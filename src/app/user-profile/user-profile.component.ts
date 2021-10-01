import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from "@angular/common";
import { OrdersService } from '../orders.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  OrdersList: Orders[] = [];
  constructor(public os:OrdersService) { }

  ngOnInit(): void {
    this.os.GetOrders().subscribe((data) => {  
      this.OrdersList = data;
      console.log(data);
    });
  }

}