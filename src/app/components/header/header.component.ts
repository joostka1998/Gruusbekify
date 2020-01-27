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

  // loginButtonClick() {
  //   this.loginService.login();
  //   this.router.navigate(['home']);
  // }
  //
  // logoutButtonClick() {
  //   this.loginService.logout();
  //   this.router.navigate(['login']);
  // }

  logoButtonClick() {
    console.log('Logo Click');
  }

  contactButtonClick() {
    this.loginService.login('1458063457692850', 'EAAH0VA1kwqwBAA8mJ2UZBhraRSz1M0i9sjaZALiZAWlYZBViyaFNNxDxj03Ay72ZC1kwftHXooiTXLrl51BQJb7CffdEkbdeDAZB5NhfHJkamNmZCmaZCe3QcU2hgh46tr7wqd0pAPZAXmOo3DNprObWS3qyNqDYjUYw9xNi3Q4eShZCIPbHOjV7qqAs1IgzOtMo6XlZBwEZBJhaUwZDZD', 'Joost', 'Kaal');
    this.router.navigate(['home']);
    console.log('Contact Click');
  }

  overButtonClick() {
    console.log('Over Click');
  }

}
