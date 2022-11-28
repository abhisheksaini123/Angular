import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import {  Location } from '@angular/common'
@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})


export class Navbar2Component implements OnInit {
  @Input() is: any
  isShowed = true
  form:any;
  msg:any;
  fname:any;

  constructor(private aroute: ActivatedRoute,private router:Router, private location:Location) { }

  ngOnInit(){
    this.isSessionout();
    this.islogout()
  }
  getUser() {
    let loginId:any = "Guest";
    if (localStorage.getItem("loginId")) {
    loginId = localStorage.getItem("loginId");
    }
    return loginId;
  }
  getValue(){
    this.isShowed = false
  }
  isLogin() {
    let check = localStorage.getItem("loginId");
    if (check != "null" && check != null) {
      this.fname = localStorage.getItem("loginId");

      return true;
    } else {
      return false;
    }
  }


isSessionout(){
    let loginId = localStorage.getItem("loginId")
    console.log("logout out path--->",this.location.path())
    console.log("is session out method-->loginId--",loginId)
    if((loginId == "null" || loginId == null)&&(this.location.path() != "" &&this.location.path() != "/login" &&
  this.location.path() !="/sessionOut" && this.location.path() !="/logout" && this.location.path() !="/registration"
    )){
      localStorage.clear();
      //this.msg ="OOPS! YOURS SESSION IS EXPIRED";
     // localStorage.setItem("sess_msg",this.msg);
      this.router.navigateByUrl("/sessionOut");
      return true;
    }else{
      return false;
    }
  }

  // isLogin() {
  //   let check = localStorage.getItem("loginId");
  //   if (check != "null" && check != null) {
  //     this.fname = localStorage.getItem("loginId");

  //     // this.form.fname = localStorage.getItem("fname");
  //     // this.form.lname = localStorage.getItem("lname");
  //     // this.form.loginId = localStorage.getItem("loginId");
  //     // this.form.role = localStorage.getItem("role");


  //     // console.log('fname is ---->>>' + this.form.data.fname);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  islogout(){
    if(this.location.path() == "/logout"){
      localStorage.clear();
      localStorage.setItem("loginId","null");
         localStorage.setItem("logmsg","You have Logged Out Successfully");
         this.router.navigateByUrl("/login")
  }
}

  
}
