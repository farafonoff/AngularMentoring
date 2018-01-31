import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(form) {
    console.log(form)
    if (form.valid) {
      this.authService.login(form.value.login, form.value.password);
    }
  }

}
