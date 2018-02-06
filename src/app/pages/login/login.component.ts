import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  login(form) {
    if (form.valid) {
      this.authService.login(form.value.login, form.value.password)
      .withLatestFrom(this.route.params, (login, params) => {
        if (params.back) {
          this.router.navigate([params.back]);
        }
      }).subscribe();
    }
  }

}
