import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  form: any = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "mobileNo": "",
    "collegeId": ""
  };

  inputError: any = {
   
  };

  message: any = "";

  success: boolean = true;

  constructor(private aroute: ActivatedRoute, private route: Router, private service: StudentService) { }

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
        self.message = "Record is successfully saved..";
        self.inputError = {
          "firstName": "",
          "lastName": "",
          "email": "",
          "mobileNo": "",
          "collegeId": ""
        };
      } else {
        self.message = "Please fill all details";
        self.inputError = res.result.inputerror
      }
    });

  }

  search() {
    this.route.navigateByUrl('/studentlist');
  }

  getString(obj: any) {
    return JSON.stringify(obj);
  }
}
