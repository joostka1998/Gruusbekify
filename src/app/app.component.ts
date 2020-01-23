import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fbLibrary() {

    (window as any).fbAsyncInit = function() {
      window['FB'].init({
        appId      : '550116815848108',
        cookie     : true,
        xfbml      : true,
        version    : 'v5.0'
      });
      window['FB'].AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  constructor(private router: Router, private loginService: LoginService) {
    if (loginService.isUserLoggedIn() === true) {
      this.router.navigate(['home']);
    } else if (loginService.isUserLoggedIn() === false) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.fbLibrary();
  }

  login() {

    window['FB'].login((response) => {
      console.log('login response', response);
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'last_name, first_name'
        }, (userInfo) => {

          console.log('user information');
          console.log(userInfo);
        });

      } else {
        console.log('User login failed');
      }
    });
  }

}
