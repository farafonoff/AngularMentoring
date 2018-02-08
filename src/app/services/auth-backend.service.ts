import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpAuthorized } from './http.authorized.service';
import { User } from '../model/user.model';

@Injectable()
export class AuthBackendService {

  constructor(private http: Http, private httpAuth: HttpAuthorized) { }

  public login(user: string, password: string): Observable<string> {
    return this.http.post('http://localhost:3004/auth/login', {
      login: user,
      password: password
    }).map(response => response.json().token);
  }

  public fetchUserInfo(): Observable<User> {
    return this.httpAuth.post('http://localhost:3004/auth/userinfo', {})
      .map((response) => {
        const json = response.json();
        const user = new User(json.login, json.password);
        return user;
      });
  }

}
