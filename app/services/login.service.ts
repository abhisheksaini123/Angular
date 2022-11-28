import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint = "http://api.sunilos.com:9080/ORSP10/User/";


  constructor(private http: HttpClient) { }
  get(id: any, resCallback: any) {


    var observer = this.http.get(this.endpoint + "get/" + id);

    observer.subscribe(function success(data) {
      resCallback(data);
      console.log("Success", data);
    }, function fail(data) {
      console.log("Fail", data.statusText);
      resCallback(data, true);
    });
  }

  authenticate(form: any, compCB: any) {
    console.log(form)
    let url = 'http://api.sunilos.com:9080/ORSP10/Auth/login';
    this.http.post(url, form,).subscribe(
      (data) => {
        console.log(data);
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }
}
