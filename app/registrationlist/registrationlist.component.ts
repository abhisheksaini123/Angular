import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registrationlist',
  templateUrl: './registrationlist.component.html',
  styleUrls: ['./registrationlist.component.css']
})
export class RegistrationlistComponent implements OnInit {

  message = "";

  list:any = [];

  form:any = {
    "firstName":"",
    "lastName":"",
    "loginId":"",
    "password":"",
    "roleId": ""
  };

  responseOblect =null;
  routes: any;

  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
    this.search();
    
  }

  edit(id:any) {
    this.router.navigateByUrl('/registration/' +id);
  }

  delete(id:any) {
    var self = this;
    this.service.delete(id, function (res:any, error:any) {
      if (error) {
        alert("Error " + res.message);
        return;
      }
      self.search();
    });
  }

  // edit(id:any) {
  //   var self = this;
  //   this.service.edit(id, function (res:any, error:any) {
  //     if (error) {
  //       alert("Error " + res.message);
  //       return;
  //     }
  //     self.search();
  //   });
  // }

  search() {
    var self = this;
    this.service.search(this.form, function (res:any, error:any) {
      if (error) {
        alert("Error " + res.message);
        return;
      }
      self.list = res.result.data;
      self.responseOblect = res;
    });
  }

  getString(obj:any){
    return JSON.stringify(obj);
  }

}
