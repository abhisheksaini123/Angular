import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'angular-14';
  subtitle = 'Open Source Knowledge Academe';

  getUser() {
    let User = "Guest";
    if (localStorage.getItem("login")) {
    }
    return User;
  }
}
