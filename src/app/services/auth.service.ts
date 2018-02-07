import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { Http } from '@angular/http';
import { HttpAuthorized } from './http.authorized.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const AUTH_STORAGE_KEY = 'auth_token';

@Injectable()
export class AuthService {
  authToken = new BehaviorSubject<string>(localStorage.getItem(AUTH_STORAGE_KEY));
  authUser = new ReplaySubject<User>(1);
  constructor(private http: Http, private httpAuth: HttpAuthorized) {
    this.authUser.subscribe((user) => {
      console.log('===== AUTH USER ====', user);
    });
    this.authToken
      .subscribe(token => {
        console.log('====AUTH TOKEN====', token);
        if (token != null) {
          localStorage.setItem(AUTH_STORAGE_KEY, token);
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      });
      if (this.authToken.getValue()) {
        this.fetchUserInfo().subscribe();
      } else {
        this.authUser.next(null);
      }
   }

  private fetchUserInfo(): Observable<User> {
    return this.httpAuth.post('http://localhost:3004/auth/userinfo', {})
      .map((response) => {
        const json = response.json();
        const user = new User(json.login, json.password);
        return user;
      }).do(user => this.authUser.next(user));
  }

  login(user: string, password: string): Observable<User> {
    return this.http.post('http://localhost:3004/auth/login', {
      login: user,
      password: password
    }).do((response) => {
      this.authToken.next(response.json().token);
    }).flatMap(() => this.fetchUserInfo());
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
