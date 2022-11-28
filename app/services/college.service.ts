import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  endpoint = "http://api.sunilos.com:9080/ORSP10/College/";

  constructor(private http:HttpClient) { }

  get(id:any, compCB:any) {
    let url = this.endpoint + "get/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data) {
        compCB(data);
      }, function fail(data) {
        compCB(data, true)
      });
  }

  delete(id:any, compCB:any) {
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }

  search(form:any, compCB:any) {
    let url = this.endpoint + "search";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }

  save(form:any, compCB:any) {
    let url = this.endpoint + "save";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }


}
