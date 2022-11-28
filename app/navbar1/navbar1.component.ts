import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  // @Input() is: any
  // isShowed = true
  // form:any;
  constructor(private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.isSessionout();
    // this.isLogout();
  }

  // isSessionout(){
  //   let loginId = localStorage.getItem("loginId")
  //   console.log("logout out path--->",this.location.path())
  //   console.log("is session out method-->loginId--",loginId)
  //   if((loginId == "null" || loginId == null)&&(this.location.path() ! = "" &&this.location.path() ! "/login"))
  // this.location.path() !="/sessionOut"&&this.location.path() !="/logout" && this.locationr.path() !="/registration"
  // && this.location.path() !=""
  // }
  // getUser() {
  //   let login:any = "Guest";
  //   if (localStorage.getItem("login")) {
  //   login = localStorage.getItem("login");
  //   }
  //   return login;
  // }
  // getValue(){
  //   this.isShowed = false
  // }


//   isLogin() {
//     let check = localStorage.getItem('fname');
//     if (check != "null" && check != null) {
//       this.form.data.fname = localStorage.getItem("fname");
//       this.form.data.lname = localStorage.getItem("lname");
//       this.form.data.loginId = localStorage.getItem("loginId");
//       this.form.data.role = localStorage.getItem("role");


//       // console.log('fname is ---->>>' + this.form.data.fname);
//       return true;
//     } else {
//       return false;
//     }
//   }

// logout(){
//   localStorage.removeItem("fname");
//        localStorage.removeItem("lname");
//        localStorage.removeItem("loginId");
//        localStorage.removeItem("role")
//        localStorage.setItem("logmsg","You have Logged Out Successfully");
// }

}
