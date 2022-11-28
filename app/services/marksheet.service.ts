import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarksheetService {

  endpoint = "http://api.sunilos.com:9080/ORSP10/Marksheet/";


  constructor( private http:HttpClient) { }

  get(id:any, responseCB:any) {
    let url = this.endpoint + "get/" + id;
    var observer = this.http.get(url);
    observer.subscribe(function success(data) {
      responseCB(data);
    }, function fail(data) {
      responseCB(data, true)
    });
  }

  delete(id:any, responseCB:any) {
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }

  search(form:any, responseCB:any) {
    let url = this.endpoint + "search";
    this.http.post(url, form).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }
  save(form:any, responseCB:any) {
    let url = this.endpoint + "save";
    this.http.post(url, form).subscribe(
      (data) => {
        responseCB(data);
      },
      (data) => {
        responseCB(data, true);
      });
  }

  today() {
    var d = new Date();
    return d;
  }
 
}
