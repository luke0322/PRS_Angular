import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuComponent } from './core/menu/menu.component';
import { UserService} from './service/user.service';

import { VendorService } from './service/vendor.service';
import { ProductService } from './service/product.service';
import { StatusService } from './service/status.service';
import { LineItemService } from './service/lineitem.service';
import { SystemService } from './service/system.service';

import { PurchaserequestService } from './service/purchaserequest.service';
import { AppComponent } from './app.component';
import { SortPipe } from './util/sort-pipe';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

//add the rest of vendor parts here
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { StatusListComponent } from './feature/status/status-list/status-list.component';
import { PurchaserequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { StatusDetailComponent } from './feature/status/status-detail/status-detail.component';

import { LineitemListComponent } from './feature/lineitem/lineitem-list/lineitem-list.component';
import { LineitemDetailComponent } from './feature/lineitem/lineitem-detail/lineitem-detail.component';
import { LineitemCreateComponent } from './feature/lineitem/lineitem-create/lineitem-create.component';
import { LineitemEditComponent } from './feature/lineitem/lineitem-edit/lineitem-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    SortPipe,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    AboutComponent,
    HomeComponent,
    StatusListComponent,
    PurchaserequestListComponent,
    PurchaserequestDetailComponent,
    PurchaserequestCreateComponent,
    PurchaserequestEditComponent,
    UserLoginComponent,
    StatusDetailComponent,
    LineitemListComponent,
    LineitemDetailComponent,
    LineitemCreateComponent,
    LineitemEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule //always do this at the end

  ],
  providers: [
 	UserService,
  VendorService,
  ProductService,
  StatusService,
  PurchaserequestService,
  LineItemService,
  SystemService], //we put our services here
  bootstrap: [AppComponent]
})
export class AppModule { }
