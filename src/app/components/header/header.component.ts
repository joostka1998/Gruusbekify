import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn;

  constructor(private router: Router, private loginService: LoginService) {
     this.isUserLoggedIn = loginService.isUserLoggedIn();
    router.events.subscribe((value) => {
      this.isUserLoggedIn = loginService.isUserLoggedIn();
    });
  }

  ngOnInit() {
  }

  loginButtonClick() {
    this.loginService.login();
    this.router.navigate(['home']);
  }

  logoutButtonClick() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  logoButtonClick(){
    console.log('Logo Click');
  }

  contactButtonClick(){
    console.log('Contact Click');
  }

  overButtonClick(){
    console.log('Over Click');
  }

}
