import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ForgotpasswordComponent} from  './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminRetailerAddComponent } from './admin-retailer-add/admin-retailer-add.component';
import { AdminRetailerViewComponent } from './admin-retailer-view/admin-retailer-view.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FilterComponent } from './shopping/filter/filter.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CartitemComponent } from './shopping/cart/cartitem/cartitem.component';
import { ProductlistComponent } from './shopping/productlist/productlist.component';
import { ProductitemComponent } from './shopping/productlist/productitem/productitem.component';


const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'ForgotPassword',component: ForgotpasswordComponent},
  {path:'Home',component: HomeComponent},
  {path:'Homepage',component: HomepageComponent},
  {path:'AdminRetailerAdd',component:AdminRetailerAddComponent},
  {path:'AdminRetailerDetails',component:AdminRetailerViewComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'Shopping',component:ShoppingComponent},
  {path:'Filter',component:FilterComponent},
  {path:'Cart',component:CartComponent},
  {path:'Cartitem',component:CartitemComponent},
  {path:'ProductList',component:ProductlistComponent},
  {path:'Productitem',component:ProductitemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
