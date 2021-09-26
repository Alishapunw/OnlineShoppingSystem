import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavpageComponent } from './homepage/navpage/navpage.component';
import { AdminRetailerViewComponent } from './admin-retailer-view/admin-retailer-view.component';
import { AdminRetailerAddComponent } from './admin-retailer-add/admin-retailer-add.component';
import { RetailerDetailsComponent } from './retailer-details/retailer-details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FilterComponent } from './shopping/filter/filter.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CartitemComponent } from './shopping/cart/cartitem/cartitem.component';
import { ProductlistComponent } from './shopping/productlist/productlist.component';
import { ProductitemComponent } from './shopping/productlist/productitem/productitem.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategorynavComponent } from './homepage/categorynav/categorynav.component';
import { BillingComponent } from './billing/billing.component';
import { ProductdetailviewComponent } from './productdetailview/productdetailview.component';
import { HttpClientModule } from '@angular/common/http';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { RetailerSideNavComponent } from './retailer-side-nav/retailer-side-nav.component';
import { MailComponent } from './mail/mail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    RetailerProfileComponent,
    HomeComponent,
    AddProductComponent,
    ChangePasswordComponent,
    HomeComponent,
    AdminRetailerViewComponent,
    AdminRetailerAddComponent,
    RetailerDetailsComponent,
    HomepageComponent,
    NavpageComponent,
    ShoppingComponent,
    FilterComponent,
    CartComponent,
    CartitemComponent,
    ProductlistComponent,
    ProductitemComponent,
    UserProfileComponent,
    CategorynavComponent,
    BillingComponent,
    ProductdetailviewComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductsComponent,
    RetailerSideNavComponent,
    MailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }