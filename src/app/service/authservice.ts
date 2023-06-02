import { Injectable } from '@angular/core';
import { RoleType } from '../models/Role-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor() { }

  login(username: string, password: string) {
    // Logic for validating user credentials and setting loggedInStatus to true if valid
    this.loggedInStatus = true;
  }

  logout() {
    // Logic for logging out user and setting loggedInStatus to false
    this.loggedInStatus = false;
  }

  isLoggedIn() {
    return this.loggedInStatus;
  }


}
