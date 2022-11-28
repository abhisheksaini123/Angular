import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksheetService } from '../services/marksheet.service';

@Component({
  selector: 'app-marksheetlist',
  templateUrl: './marksheetlist.component.html',
  styleUrls: ['./marksheetlist.component.css']
})
export class MarksheetlistComponent implements OnInit {

  message = "";

  List:any = [];

  form = {
    "rollNo":"",
    "name":"",
  };
  inputError:any={
    "rollNo":"",
    "name":"",
  };

  responseObject = null;

  constructor(private router: Router, private service:MarksheetService) { }

  ngOnInit(): void {
    this.search();
  }
  edit(id:any) {
    this.router.navigateByUrl('/marksheet/' + id);
  }

  delete(id:any) {
    var self = this;
    this.service.delete(id, function (res:any, error:any) {
      if (error) {
        alert("Error" + res.message);
        return;
      }
      self.search();
    });
  }

  search() {
    var self = this;
    this.service.search(this.form, function (res:any, error:any) {
      if (error) {
        alert("Error" + res.message);
        return;
      }
      self.List = res.result.data;
      self.responseObject = res;
    });
  }

  getString(obj:any){
    return JSON.stringify(obj);
  }
}
