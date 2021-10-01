import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import {ForgotpasswordComponent} from  './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminRetailerAddComponent } from './admin-retailer-add/admin-retailer-add.component';
import { AdminRetailerViewComponent } from './admin-retailer-view/admin-retailer-view.component';


import { ProductdetailviewComponent } from './productdetailview/productdetailview.component';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FilterComponent } from './shopping/filter/filter.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CartitemComponent } from './shopping/cart/cartitem/cartitem.component';
import { ProductlistComponent } from './shopping/productlist/productlist.component';
import { ProductitemComponent } from './shopping/productlist/productitem/productitem.component';
import { RetailerDetailsComponent } from './retailer-details/retailer-details.component';
import { BillingComponent } from './billing/billing.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { MailComponent } from './mail/mail.component';
import { RetailerSideNavComponent } from './retailer-side-nav/retailer-side-nav.component';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ChangePasswordCustomerComponent } from './change-password-customer/change-password-customer.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { OrderSuccessfulComponent} from './order-successful/order-successful.component';
import {CompareComponent} from './compare/compare.component';
import { TestImageComponent } from './test-image/test-image.component';
import { OrderDetailsComponent } from './order-details/order-details.component';





const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  /*Admin Routes Start*/
  {path:'AdminRetailerAdd',component:AdminRetailerAddComponent},
  {path:'AdminRetailerDetails',component:AdminRetailerViewComponent},
  {path:'Adminapproval',component:AdminapprovalComponent},

  /*Admin Routes End*/

  /*Retailer Routes Start*/
  {path:'RetailerProfile',component:RetailerProfileComponent},
  {path:'AddProduct',component:AddProductComponent},
  {path:'RetailerDetails',component:RetailerDetailsComponent},
  {path:'ChangePassword',component:ChangePasswordComponent},
  /*Retailer Routes End*/
  {path:'Login',component:LoginComponent},
  {path:'Registration',component:RegistrationComponent},

  /*User Routes Start*/
  {path:'Home',component: HomeComponent},
  {path:'ProductDetail/:ProductId',component: ProductdetailviewComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'ForgotPassword',component: ForgotpasswordComponent},
  {path:'Categories',component: CategoriesComponent},
  {path:'Userdetails',component:UserdetailsComponent},


  {path:'OrderSuccesful',component:OrderSuccessfulComponent},
  {path:'Compare',component:CompareComponent},
  /*User Routes End*/
  
  

  {path:'Homepage',component: HomepageComponent},
  {path:'AdminRetailerAdd',component:AdminRetailerAddComponent},
  {path:'AdminRetailerDetails',component:AdminRetailerViewComponent},
  {path:'Shopping',component:ShoppingComponent},
  {path:'Filter',component:FilterComponent},
  {path:'Cart',component:CartComponent},
  {path:'Cartitem',component:CartitemComponent},
  {path:'ProductList',component:ProductlistComponent},
  {path:'Productitem',component:ProductitemComponent},
  {path:'Registration',component:RegistrationComponent},

  {path:'ForgotPassword',component:ForgotpasswordComponent},
  {path:'ChangePasswordCustomer',component:ChangePasswordCustomerComponent},

  
  {path:'Products',component:ProductsComponent},
  {path:'Mail',component:MailComponent},


  {path:'Billing',component:BillingComponent},
  {path:"RetailerHome",component:RetailerSideNavComponent},

  {path:'WishList',component:WishlistComponent},
  {path:'TestImage',component:TestImageComponent},

  {path:'OrderDetails',component:OrderDetailsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
