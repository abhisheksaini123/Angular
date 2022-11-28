import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: any = {
    "id":0,
    "firstName": "",
    "lastName": "",
    "loginId": "",
    "roleId": 158,
    "password": ""
  };

  inputError: any = {
    "id":"",
    "firstName": "",
    "lastName": "",
    "loginId": "",
    "roleId": "",
    "password": ""
  };

  message = "";
  success: boolean = true;

  constructor(private aroute: ActivatedRoute, private router: Router, private service: RegisterService) { }

  ngOnInit(): void {
    var self = this;
    this.form.id = Number(this.aroute.snapshot.paramMap.get("id"));
    if (!isNaN(this.form.id) && this.form.id > 0) {
      this.service.get(this.form.id, function (res: any, error: any) {
        if (error) {
          alert("Error:" + error.message);
          return;
        }
        self.form = res.result.data;
      });
    }
  }

  save() {
    var self = this;
    this.service.save(this.form, function (res: any, error: any) {
      if (error) {
        self.success = false;
        self.message = res.message;
        return;
      }

      self.success = res.success;
      if (self.success) {
        self.message = "Registration is successfully saved...";
        self.inputError={
          "firstName": "",
          "lastName": "",
          "loginId": "",
          "roleId": "",
          "password": ""
        };
      } else {
        self.message = "Registration Not Successfully...";
        self.inputError = res.result.inputerror
      }
    });
  }

  login() {
    this.router.navigateByUrl('/login');
  }
  getString(obj: any) {
    return JSON.stringify(obj)
  }


}
