import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navpage',
  templateUrl: './navpage.component.html',
  styleUrls: ['./navpage.component.css']
})
export class NavpageComponent implements OnInit {
  public total: number = 0;
  message!: boolean ;
  CurrentUserEmail:any = "";

  constructor(private cart: CartService, public auth: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
    
    this.auth.recievedStatus().subscribe((data: any) => {
      this.message = data;
    })

    this.CurrentUserEmail = localStorage.getItem("Email");
    if(this.CurrentUserEmail != null){
          this.auth.subject.next(true);
    }
  }

  logout() {
    console.log("hi");
    localStorage.removeItem('Email');
    localStorage.clear();
    this.auth.subject.next(false);
    //this.message=false;
    this.router.navigate(['Login']);
  }

}
