import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedin = true;

  constructor(private router: Router) {
    if (this.loggedin === true) {
      this.router.navigate(['home']);
    } else if (this.loggedin === false) {
      this.router.navigate(['login']);
    }
  }

}
