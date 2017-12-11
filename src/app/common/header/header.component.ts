import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  get user(): User {
    return this.authService.getUserInfo();
  }

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
  }
  
  logout() {
    this.authService.logout();
  }

}
