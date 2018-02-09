import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { State } from '../../redux/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LOGOUT } from '../../redux/login.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean;
  subscriptions = [];
  isAuthorized: Observable<boolean>;
  user: Observable<User>;

  constructor(private store: Store<State>) {
    this.isAuthorized = this.store.select('login').map(state => state.state === 'success');
    this.user = this.store.select('login').map(state => state.userDetails);
  }

  logout() {
    this.store.dispatch({ type: LOGOUT });
  }

}
