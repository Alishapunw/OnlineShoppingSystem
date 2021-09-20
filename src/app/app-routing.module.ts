import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ForgotpasswordComponent} from  './forgotpassword/forgotpassword.component';
<<<<<<< HEAD
import { RetailerHomeComponent } from './retailer-home/retailer-home.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> a09c9b87aaae998363dce3f0fc5b86708933cc83

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'ForgotPassword',component: ForgotpasswordComponent},
<<<<<<< HEAD
  {path:'RetailerHome',component:RetailerHomeComponent}
=======
  {path:'Home',component: HomeComponent},
>>>>>>> a09c9b87aaae998363dce3f0fc5b86708933cc83
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
