import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeService } from '../services/college.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  form:any = {
    "id": 0,
    "name":"",
    "address":"",
    "state":"",
    "city":"",
    "phoneNo":""
    };


    inputError:any = {
      "name": "",
      "address": "",
      "state": "",
      "city": "",
      "phoneNo": ""
    };

    message:any = "";

    success:boolean = true;
  constructor(private aroute:ActivatedRoute, private route: Router, private service:CollegeService) { }

  ngOnInit() {
    var self = this;
   this.form.id = Number(this.aroute.snapshot.paramMap.get("id"));
    if ( !isNaN(this.form.id) && this.form.id > 0) {
      this.service.get(this.form.id, function (res:any, error:any) {
        if (error) {
          alert("Error:" + error.message);
          return;
        }
        self.form = res.result.data;
      });
    }
  }

save(){
  var self = this;
  this.service.save(this.form, function (res:any,error:any){
    if (error) {
      self.success = false;
      self.message = res.message;
      return;
    }
    self.success = res.success;
    if(self.success){
      self.message = "Record is successfully saved..";
      self.inputError = {
        "name": "",
        "address": "",
        "state": "",
        "city": "",
        "phoneNo": ""
      };
    }else{
      self.message = "Data Error";
      self.inputError = res.result.inputerror
    }
  });
}

search() {
  this.route.navigateByUrl('/collegelist');
}

getString(obj:any){
  return JSON.stringify(obj);
}

}