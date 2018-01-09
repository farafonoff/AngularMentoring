import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  user: User;
  subscriptions = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.authService.getUserInfo().subscribe(user => {
      this.user = user;
    }));
    this.subscriptions.push(this.authService.isAuthenticated().subscribe(isAuth => {
      this.isLoggedIn = isAuth;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s());
  }

  logout() {
    this.authService.logout();
  }

}
