import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeHistoryComponent } from './employee-history/employee-history.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '' , component: NavbarComponent},
  {path: 'employee-registration' , component: EmployeeRegistrationComponent},
  {path: 'employee-login' , component: EmployeeLoginComponent},
  {path: 'employee-dashboard' , component: EmployeeDashboardComponent},
  {path: 'admin-login' , component: AdminLoginComponent},
  {path: 'admin-dashboard' , component: AdminDashboardComponent},
  {path: 'employee-history' , component: EmployeeHistoryComponent},
  {path: 'employee-home' , component: EmployeeHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
