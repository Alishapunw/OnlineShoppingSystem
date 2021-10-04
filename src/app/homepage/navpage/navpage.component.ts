import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication.service';
import { ProductserviceService } from 'src/app/productservice.service';
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
  userRole:any = "customer";
  public searchTerm:string='';
  constructor(private cart:CartService ,public service:ProductserviceService,public auth:AuthenticationService, public router:Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.auth.recievedStatus().subscribe((data: any) => {
      this.message = data;
    })

    this.auth.getUserStatus().subscribe((data: any) => {
      this.userRole = data;
    })

    this.CurrentUserEmail = localStorage.getItem("Email");
    if(this.CurrentUserEmail != null){
          this.auth.subject.next(true);
          this.userRole = localStorage.getItem("userRole");
          this.auth.userRole.next(this.userRole);
    }
  }

  logout() {
    console.log("hi");
    localStorage.removeItem('Email');
    localStorage.clear();
    this.auth.subject.next(false);
    this.auth.userRole.next("customer")

    //this.message=false;
    this.router.navigate(['Login']); 

    this.toastr.success('Logged out successfully', '' ,{
  timeOut: 2000,
  positionClass	: "toast-bottom-right"
});
  } 
  search(event:any)
  {
    this.searchTerm=(event.target as HTMLInputElement ).value;
    console.log(this.searchTerm);
    this.service.search.next(this.searchTerm);
  }

}
