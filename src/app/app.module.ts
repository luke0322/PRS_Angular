import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuComponent } from './core/menu/menu.component';
import { UserService} from './service/user.service';

import { AppComponent } from './app.component';
import { SortPipe } from './util/sort-pipe';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    SortPipe,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule //always do this at the end

  ],
  providers: [
 	UserService], //we put our services here
  bootstrap: [AppComponent]
})
export class AppModule { }
