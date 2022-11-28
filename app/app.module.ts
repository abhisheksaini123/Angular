
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { Navbar1Component } from './navbar1/navbar1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './services/register.service';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetlistComponent } from './marksheetlist/marksheetlist.component';
import { CollegeComponent } from './college/college.component';

import { CollegelistComponent } from './collegelist/collegelist.component';
import { RoleComponent } from './role/role.component';
import { MarksheetService } from './services/marksheet.service';
import { LogoutComponent } from './logout/logout.component';
import { CollegeService } from './services/college.service';
import { RolelistComponent } from './rolelist/rolelist.component';

import { RegistrationlistComponent } from './registrationlist/registrationlist.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { RoleService } from './services/role.service';
import { LoginService } from './services/login.service';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentService } from './services/student.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    //Navbar1Component,
    MarksheetComponent,
    MarksheetlistComponent,
    CollegeComponent,
    CollegelistComponent,
    RoleComponent,
    LogoutComponent,
    RolelistComponent,
    RegistrationlistComponent,
    Navbar2Component,
    AddstudentComponent,
    StudentlistComponent,
    WelcomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    MarksheetService,
    CollegeService,
    RoleService,
    LoginService,
    StudentService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
