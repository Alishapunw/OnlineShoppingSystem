import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ForgotpasswordComponent} from  './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { AdminRetailerAddComponent } from './admin-retailer-add/admin-retailer-add.component';
import { AdminRetailerViewComponent } from './admin-retailer-view/admin-retailer-view.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';


const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'ForgotPassword',component: ForgotpasswordComponent},
  {path:'Home',component: HomeComponent},
  {path:'AdminRetailerAdd',component:AdminRetailerAddComponent},
  {path:'AdminRetailerDetails',component:AdminRetailerViewComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
