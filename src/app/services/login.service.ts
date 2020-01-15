import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedin;

  constructor() {
    this.loggedin = false;
  }

  logout() {
    this.loggedin = false;
  }

  login() {
    this.loggedin = true;
  }

  isUserLoggedIn() {
    return (this.loggedin);
  }
}
