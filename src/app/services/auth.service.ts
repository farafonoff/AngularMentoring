import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable()
export class AuthService {
  private AUTH_STORAGE_KEY = 'auth';
  constructor() { }

  login(user: string, password: string) {
    localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(new User(user, password)));
  }

  logout() {
    localStorage.removeItem(this.AUTH_STORAGE_KEY);
  }
  
  isAuthenticated():boolean {
    return !!localStorage.getItem(this.AUTH_STORAGE_KEY);
  }

  getUserInfo():User {
    return JSON.parse(localStorage.getItem(this.AUTH_STORAGE_KEY));
  }
}
