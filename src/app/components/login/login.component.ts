import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.fbLibrary();
  }

  loginButtonClick() {
    window['FB'].login((response) => {
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'last_name, first_name'
        }, (userInfo) => {
          this.loginService.login(
            response.authResponse.userID,
            response.authResponse.accessToken,
            userInfo.first_name,
            userInfo.last_name
          );
          this.router.navigate(['home']);
        });
      } else {
        console.log('User login failed');
      }
    });
  }
}
