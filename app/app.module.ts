import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostelementComponent } from './home/postelement/postelement.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    AccountComponent,
    LoginComponent,
    HomeComponent,
    PostelementComponent,
    LogoutComponent,   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
