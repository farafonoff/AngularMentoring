import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpAuthorized } from './http.authorized.service';

export const AUTH_STORAGE_KEY = 'auth_token';

@Injectable()
export class AuthService {
  authToken = new ReplaySubject<string>(1);
  authUser = new ReplaySubject<User>(1);
  constructor(private http: Http, private httpAuth: HttpAuthorized) {
    this.authToken.subscribe(token => {// save to LS
      if (token != null) {
        localStorage.setItem(AUTH_STORAGE_KEY, token);
        this.fetchUserInfo();
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        this.authUser.next(null);
      }
    });
    if (!!localStorage.getItem(AUTH_STORAGE_KEY)) {
      this.fetchUserInfo();
    }
   }

   fetchUserInfo() {
     this.httpAuth.post('http://localhost:3004/auth/userinfo', {})
     .subscribe((response) => {
       const json = response.json();
       const user = new User(json.login, json.password);
       this.authUser.next(user);
     });
   }

  login(user: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3004/auth/login', {
      login: user,
      password: password
    }).do((response) => {
      this.authToken.next(response.json().token);
    }).map(response => true);
  }

  logout() {
    this.authToken.next(null);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authUser.map(u => !!u);
  }

  getUserInfo(): Observable<User> {
    return this.authUser;
  }
}
