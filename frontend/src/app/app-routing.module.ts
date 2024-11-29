import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CrudCustomerComponent } from './components/crud-customer/crud-customer.component';
import { HomeComponent } from './components/home/home.component';
import { CrudEmployeeComponent } from './components/crud-employee/crud-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: '', component: HomeComponent },
  { path: 'components/crud-customer', component: CrudCustomerComponent },
  { path: 'components/crud-employee', component: CrudEmployeeComponent },
  { path: 'components/navbar', component: NavbarComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
