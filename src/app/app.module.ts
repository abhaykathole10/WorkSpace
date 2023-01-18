import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeHistoryComponent } from './employee-history/employee-history.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeRegistrationComponent,
    EmployeeLoginComponent,
    EmployeeDashboardComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    EmployeeHistoryComponent,
    EmployeeHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
