import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ForgotpasswordComponent} from  './forgotpassword/forgotpassword.component';
import { RetailerHomeComponent } from './retailer-home/retailer-home.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { AdminRetailerAddComponent } from './admin-retailer-add/admin-retailer-add.component';
import { AdminRetailerViewComponent } from './admin-retailer-view/admin-retailer-view.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  /*Admin Routes Start*/
  {path:'AdminRetailerAdd',component:AdminRetailerAddComponent},
  {path:'AdminRetailerDetails',component:AdminRetailerViewComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  /*Admin Routes End*/

  /*Retailer Routes Start*/
  {path:'RetailerHome',component:RetailerHomeComponent},
  {path:'RetailerProfile',component:RetailerProfileComponent},
  {path:'AddProduct',component:AddProductComponent},
  /*Retailer Routes End*/

  /*User Routes Start*/
  {path:'Home',component: HomeComponent},
  {path:'Login', component: LoginComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'ForgotPassword',component: ForgotpasswordComponent},
  {path:'UserProfile',component:UserProfileComponent},
  /*User Routes End*/
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
