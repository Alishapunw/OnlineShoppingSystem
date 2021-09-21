import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { RetailerHomeComponent } from './retailer-home/retailer-home.component';
// import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavpageComponent } from './homepage/navpage/navpage.component';
import { AdminRetailerViewComponent } from './admin-retailer-view/admin-retailer-view.component';
import { AdminRetailerAddComponent } from './admin-retailer-add/admin-retailer-add.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FilterComponent } from './shopping/filter/filter.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CartitemComponent } from './shopping/cart/cartitem/cartitem.component';
import { ProductlistComponent } from './shopping/productlist/productlist.component';
import { ProductitemComponent } from './shopping/productlist/productitem/productitem.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    RetailerHomeComponent,
    RetailerProfileComponent,
    HomeComponent,
    AddProductComponent,
    ChangePasswordComponent,
    HomeComponent,
    AdminRetailerViewComponent,
    AdminRetailerAddComponent,
    AdminLoginComponent,
<<<<<<< HEAD
    HomepageComponent,
    NavpageComponent,
    ShoppingComponent,
    FilterComponent,
    CartComponent,
    CartitemComponent,
    ProductlistComponent,
    ProductitemComponent
=======
    UserProfileComponent,
    ProductDetailViewComponent
>>>>>>> 94812aaa46e7854c95403d64699dce083d1a29c1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }