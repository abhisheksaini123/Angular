import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {


  message = "";

  list:any = [];

  form = {
    "name": "",
    "discription":""
  };

  responseOblect =null;
  routes: any;

  constructor(private router:Router, private service:RoleService) { }

  ngOnInit(): void {
    this.search();
  }

  edit(id:any) {
    this.router.navigateByUrl('/role/' +id  );
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
