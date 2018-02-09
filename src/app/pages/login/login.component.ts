import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as loginReducer from '../../redux/login.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private store: Store<any>) {
  }

  ngOnInit() {
  }

  login(form) {
    if (form.valid) {
      this.store.dispatch( { type: loginReducer.LOGIN, payload: { ...form.value, back: this.route.snapshot.params.back } } );
    }
  }

}
