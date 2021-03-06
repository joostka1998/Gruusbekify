import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private loginService: LoginService) {
    if (loginService.isUserLoggedIn() === true) {
      this.router.navigate(['home']);
    } else if (loginService.isUserLoggedIn() === false) {
      this.router.navigate(['login']);
    }
  }

}
