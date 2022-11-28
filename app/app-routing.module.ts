import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';

import { CollegeComponent } from './college/college.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetlistComponent } from './marksheetlist/marksheetlist.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationlistComponent } from './registrationlist/registrationlist.component';
import { RoleComponent } from './role/role.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'registration/:id', component: RegistrationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registrationlist', component: RegistrationlistComponent },
  { path: 'sessionOut', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'addstudent/:id', component: AddstudentComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'studentlist', component: StudentlistComponent },
  { path: 'role', component: RoleComponent },
  { path: 'role/:id', component: RoleComponent },
  { path: 'rolelist', component: RolelistComponent },
  // {path: 'navbar1', component:Navbar1Component},
  { path: 'navbar2', component: Navbar2Component },
  { path: 'marksheet', component: MarksheetComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'marksheetlist', component: MarksheetlistComponent },
  {
    //pass route parameter :id
    path: 'marksheet/:id',
    component: MarksheetComponent
  },
  { path: 'college', component: CollegeComponent },
  {
    //pass route parameter :id
    path: 'college/:id',
    component: CollegeComponent
  },
  { path: 'collegelist', component: CollegelistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
