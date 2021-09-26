import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component(
  {
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
  }
)
export class ProductitemComponent implements OnInit 
{
  @Input() productItem!:Product;
  constructor(private msg:MessengerService) 
  {

  }
  ngOnInit(): void {
  }
  handleAddtoCart()
  {
    this.msg.sendMessage(this.productItem);
  }
}
