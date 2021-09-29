import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineShoppingSystem';
  CurrentUserEmail:any = "";

  
  constructor(public service:AuthenticationService) {} 
  ngOnInit(){
    this.CurrentUserEmail = localStorage.getItem("Email");
    if(this.CurrentUserEmail != null){
          this.service.subject.next(true);
    }
    console.log("this.CurrentUserEmail");
    console.log(this.CurrentUserEmail);
    console.log("this.CurrentUserEmail");
  }
}
