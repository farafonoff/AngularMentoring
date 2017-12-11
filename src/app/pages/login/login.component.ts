import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginClick() {
    this.authService.login(this.login, this.password);
  }

}
