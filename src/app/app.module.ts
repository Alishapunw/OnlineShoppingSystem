import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';


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
import { CategorynavComponent } from './homepage/categorynav/categorynav.component';
import { BillingComponent } from './billing/billing.component';
import { ProductdetailviewComponent } from './productdetailview/productdetailview.component';
import { HttpClientModule } from '@angular/common/http';

import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { RetailerSideNavComponent } from './retailer-side-nav/retailer-side-nav.component';
import { MailComponent } from './mail/mail.component';
import { FilterPipe } from './filter.pipe';
import { Retailer1Component } from './retailer1/retailer1.component';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ChangePasswordCustomerComponent } from './change-password-customer/change-password-customer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { CompareComponent } from './compare/compare.component';
import { TestImageComponent } from './test-image/test-image.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';




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
    CategorynavComponent,
    BillingComponent,
    ProductdetailviewComponent,
    CategoriesComponent,
    ProductsComponent,
    RetailerSideNavComponent,
    MailComponent,
    FilterPipe,
    Retailer1Component,
    AdminapprovalComponent,
    UserdetailsComponent,
    ChangePasswordCustomerComponent,
    WishlistComponent,
    OrderSuccessfulComponent,
    CompareComponent,
    TestImageComponent,
    OrderDetailsComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }