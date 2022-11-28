import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  form: any = {
    "id":0,
    "name": "",
    "discription": ""
  };

  inputError: any = {
    // "name": "",
    // "discription": ""
  };


  message = "";

  success: boolean = true;

  constructor(private aroute: ActivatedRoute, private router: Router, private service: RoleService) { }

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
        alert("error" + error.message);
        self.message = "Data Not Saved";
        return
      }
  //     self.message = " Data saved";
  //     self.success = res.success;
  //     console.log('Ctl', res);
  //   })
  // }

  self.success = res.success;
  if (self.success) {
    self.message = "Record is successfully saved..";
    self.inputError = {
     "name": "",
    "discription": ""
    };
  } else {
    self.message = "Data Error";
    self.inputError = res.result.inputerror
  }
});
}


}

