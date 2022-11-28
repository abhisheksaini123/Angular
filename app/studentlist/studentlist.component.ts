import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  message = "";

  list:any = [];

  form = {
    "collegeId": "",
    "email": "",
  };

  responseOblect =null;
  routes: any;
  constructor(private router:Router,private service:StudentService) { }

  ngOnInit(): void {
    this.search();
  }
  edit(id:any) {
    this.router.navigateByUrl('/addstudent/' +id);
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
