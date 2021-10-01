import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  OrdersList: Orders[] = [];
  LoggedInUserEmail: any = ""
  IsLoading: boolean = false;

  constructor(public os:OrdersService) { }

  ngOnInit(): void {
    this.IsLoading = true;
    this.LoggedInUserEmail = localStorage.getItem("Email");

    this.os.GetOrders(this.LoggedInUserEmail).subscribe((data) => {  
      this.OrdersList = data;
      console.log(data);
    });

    this.IsLoading = false;

  }


}
