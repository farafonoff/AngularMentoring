import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private AUTH_STORAGE_KEY = 'auth';
  authUser = new ReplaySubject<User>(1);
  constructor() {
    this.authUser.subscribe(user => {// save to LS
      if (user != null) {
        localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(this.AUTH_STORAGE_KEY);
      }
    });
    if (!!localStorage.getItem(this.AUTH_STORAGE_KEY)) {
      this.authUser.next(
        JSON.parse(localStorage.getItem(this.AUTH_STORAGE_KEY))
      );
    }
   }

  login(user: string, password: string) {
    const newUser = new User(user, password);
    this.authUser.next(newUser);
  }

  logout() {
    this.authUser.next(null);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authUser.map(u => !!u);
  }

  getUserInfo(): Observable<User> {
    return this.authUser;
  }
}
