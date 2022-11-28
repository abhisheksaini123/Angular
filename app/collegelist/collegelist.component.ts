import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from '../services/college.service';

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})
export class CollegelistComponent implements OnInit {

  message = "";

  list:any = [];

  form = {
    "name": "",
    "address": "",
  };

  responseOblect =null;
  routes: any;

  constructor(private router: Router, private service:CollegeService) { }

  ngOnInit(): void {
    this.search();
  }
  

  edit(id:any) {
    this.router.navigateByUrl('/college/' + id);
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
