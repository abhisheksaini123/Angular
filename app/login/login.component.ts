import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public success: boolean = true;

  public message = "";

  form: any = {
    "loginId": "",
    "password": ""
  };

  inputError: any = {

  };

  clearError() {
    this.message = "",
      this.inputError = {
        "loginId": "",
        "password": ""
      };
  }
  constructor(private aroute: ActivatedRoute, private router: Router, private service: LoginService) { }



  ngOnInit(): void {

    localStorage.removeItem("loginId")
    if (this.router.url == "/sessionOut") {
      this.success = false;
      //   this.form.message = localStorage.getItem("sess_meg");
      // }else{
      //   let msg = localStorage.getItem("logout_msg")
      //   if(msg != null || msg != "null"){
      //     this.success = true;
      //     this.form.message = msg;
      //   }
    }

    //   this.clearError();
    //   var self = this;
    //   this.form.id = Number(this.aroute.snapshot.paramMap.get("id"));
    //   if (!isNaN(this.form.id) && this.form.id > 0) {
    //     this.service.get(this.form.id, function (res: any, error: any) {
    //       if (error) {
    //         alert("Error:" + error.message);
    //         return;
    //       }
    //       self.form = res.result.data;
    //     });
    //   }
  }

  login() {
    let self = this;
    self.clearError();

    self.service.authenticate(self.form, function (res: any, error: any) {

      if (error) {
        self.success = false;
        self.message = res.message;
        return;
      }
      self.success = res.success;

      if
        (self.success == true) {
        alert("login successfully")
        self.inputError={
          "loginId": "",
          "password": ""
        };
        localStorage.setItem("loginId", res.result.data.firstName);
        self.router.navigateByUrl('/navbar2');
      } else {
        self.message = "Invalid Id or Password";
        self.inputError = res.result.inputError

      }

    });
  }
  getString(obj: any) {
    return JSON.stringify(obj);
  }
}
