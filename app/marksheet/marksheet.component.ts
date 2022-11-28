import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { MarksheetService } from '../services/marksheet.service';


@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {
  form: any = {
    "id": 0,
    "roleNo": "0",
    "name": "",
    "physics": "",
    "chemistry": "",
    "math": "",
    "studentId": 1
  };

  inputError: any = {
    "id": "",
    "roleNo": "",
    "name": "",
    "physics": "",
    "chemistry": "",
    "math": "",
    "studentId": ""
  };
  message = "";

  success: boolean = true;



  constructor(private aroute: ActivatedRoute, private router: Router, private service: MarksheetService) { }

  ngOnInit() {
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
          "id": "",
          "roleNo": "",
          "name": "",
          "physics": "",
          "chemistry": "",
          "math": "",
          "studentId": ""
        };
      } else {
        self.message = "Data Error";
        self.inputError = res.result.inputerror
      }
    });
  }

  search() {
    this.router.navigateByUrl('/marksheetlist');
  }

  getString(obj: any) {
    return JSON.stringify(obj);
  }

}
