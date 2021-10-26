import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full',data :{ isloggin: false} },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent},
  { path: 'login', component: LoginComponent },
  { path: 'userpage', component: UserpageComponent},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
