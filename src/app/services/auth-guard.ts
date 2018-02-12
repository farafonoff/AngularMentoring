import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Store } from '@ngrx/store';
import { State } from '../redux';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private store: Store<State>) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
            return this.store.select('login')
            .filter(loginState => loginState.state !== 'initial')
            .do((result) => {
                if (result.state === 'logout') {
                    this.router.navigate(['login', { back: state.url }]);
                }
            }).map((result) => result.state === 'success');
    }
}
