import { Injectable } from '@angular/core';
import { Role, RoleType } from '../models/Role-model';
import { User } from '../models/User-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;
  constructor() { }

  login(username: string, password: string): void {
    // Logic for validating user credentials and setting loggedInStatus to true if valid
    this.loggedInStatus = true;
  }

  logout() : void {
    // Logic for logging out user and setting loggedInStatus to false
    this.loggedInStatus = false;
  }

  isLoggedIn() : boolean {
    return this.loggedInStatus;

  }
}
