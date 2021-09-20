import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ForgotpasswordComponent} from  './forgotpassword/forgotpassword.component';
import { RetailerHomeComponent } from './retailer-home/retailer-home.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'ForgotPassword',component: ForgotpasswordComponent},
  {path:'RetailerHome',component:RetailerHomeComponent}
  {path:'Home',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
