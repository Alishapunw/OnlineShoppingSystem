import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  RetailerProducts?:Product[]=[
    new Product(1, 'HP 14s Core i3 11th Gen' , 'HP', 40000, 'HP 14s Core i3 11th Gen - (8 GB/256 GB SSD/Windows 10 Home) 14s- DY2501TU Thin and Light Laptop  (14 inch, Natural Silver, 1.46 kg, With MS Office)', ["assets/images/1/0.jpg","assets/images/1/1.jpg", "assets/images/1/2.jpg", "assets/images/1/3.jpg"]),
    new Product(2, 'HP 15-ec1105AX Ryzen 5 Hexa Core 4600H' , 'HP', 60000, 'HP 15-ec1105AX Ryzen 5 Hexa Core 4600H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) 15-ec1105AX Gaming Laptop  (15.6 inch, Shadow Black & Ultra Violet, 1.98 Kg)', ["assets/images/2/0.jpg","assets/images/2/1.jpg", "assets/images/2/2.jpg", "assets/images/2/3.jpg"]),
    new Product(3, 'Apple iPhone XR' , 'Apple', 42000, 'Apple iPhone XR ((PRODUCT)RED, 64 GB) (Includes EarPods, Power Adapter)', ["assets/images/3/0.jpg","assets/images/3/1.jpg", "assets/images/3/2.jpg", "assets/images/3/3.jpg"]),
    //new Product(4, 'APPLE iPhone 12' , 'HP', 68000, '128 GB ROM || 15.49 cm (6.1 inch) Super Retina XDR Display || 12MP + 12MP | 12MP Front Camera', ["assets/images/4/0.jpg","assets/images/4/1.jpg", "assets/images/4/2.png"])
  ];
  constructor() { }

  ngOnInit(): void {
  }

}