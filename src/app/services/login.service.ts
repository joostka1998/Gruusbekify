import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedin;
  userID;
  accessToken;
  firstName;
  lastName;

  constructor() {
    this.loggedin = false;
  }

  login(userID: string, accessToken: string, firstName: string, lastName: string) {
    this.userID = userID;
    this.accessToken = accessToken;
    this.firstName = firstName;
    this.lastName = lastName;
    this.loggedin = true;
    console.log('UserID: ' + this.userID + '\n Token: ' + this.accessToken);
  }

  isUserLoggedIn() {
    return (this.loggedin);
  }
}
