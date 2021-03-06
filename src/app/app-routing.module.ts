import { NgModule } from '@angular/core';
import{ Routes,RouterModule } from '@angular/router';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';

import { PurchaserequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';

import { LineitemListComponent } from './feature/lineitem/lineitem-list/lineitem-list.component';
import { LineitemDetailComponent } from './feature/lineitem/lineitem-detail/lineitem-detail.component';
import { LineitemEditComponent } from './feature/lineitem/lineitem-edit/lineitem-edit.component';
import { LineitemCreateComponent } from './feature/lineitem/lineitem-create/lineitem-create.component';

import { AboutComponent } from './core/about/about.component';
import { StatusListComponent } from './feature/status/status-list/status-list.component';
import { StatusDetailComponent } from './feature/status/status-detail/status-detail.component';

const routes: Routes =[
// {path: '', redirectTo: 'user/login',pathMatch: 'full'},
{path: '', redirectTo: 'purchaserequest/list',pathMatch: 'full'}, //first path if empty
{path: 'about', component: AboutComponent},
{path: 'user/detail/:id', component: UserDetailComponent},
{path: 'user/edit/:id', component: UserEditComponent},
{path: 'user/create', component: UserCreateComponent},
{path: 'user/list', component: UserListComponent},
{path: 'user/login', component: UserLoginComponent},

{path: 'vendor/detail/:id', component: VendorDetailComponent},
{path: 'vendor/edit/:id', component: VendorEditComponent},
{path: 'vendor/create', component: VendorCreateComponent},
{path: 'vendor/list', component: VendorListComponent},

{path: 'product/detail/:id', component: ProductDetailComponent},
{path: 'product/edit/:id', component: ProductEditComponent},
{path: 'product/create', component: ProductCreateComponent},
{path: 'product/list', component: ProductListComponent},

{path: 'purchaserequest/detail/:id', component: PurchaserequestDetailComponent},
{path: 'purchaserequest/edit/:id', component: PurchaserequestEditComponent},
{path: 'purchaserequest/create', component: PurchaserequestCreateComponent},
{path: 'purchaserequest/list', component: PurchaserequestListComponent},

{path: 'lineitem/detail/:id', component: LineitemDetailComponent},
{path: 'lineitem/edit/:id', component: LineitemEditComponent},
{path: 'lineitem/create', component: LineitemCreateComponent},
{path: 'lineitem/list', component: LineitemListComponent},
{path: 'lineitem/LinesForPR/:Id', component: LineitemListComponent},

{path: 'status', component: StatusListComponent},
{path: 'status/detail/:id', component: StatusDetailComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }