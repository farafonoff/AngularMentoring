import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/empty';
import * as loginReducer from './login.reducer';
import { AuthService } from '../services/auth.service';
import { Action } from '@ngrx/store';
import { ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { AuthBackendService } from '../services/auth-backend.service';
import { User } from '../model/user.model';
import { ActionP } from './login.reducer';

export const AUTH_STORAGE_KEY = 'auth_token';

@Injectable()
export class LoginEffects {
    constructor(private actions: Actions, private authBackend: AuthBackendService) { }

    @Effect() init = this.actions
        .ofType(ROOT_EFFECTS_INIT)
        .switchMap(() => {
            const token = localStorage.getItem(AUTH_STORAGE_KEY);
            if (token) {
                return this.loadUserInfo(token);
            } else {
                return Observable.of({
                    type: loginReducer.LOGOUT
                });
            }
        });

    @Effect() login = this.actions
        .ofType(loginReducer.LOGIN)
        .switchMap((action: loginReducer.ActionP) => {
            return this.authBackend.login(action.payload.login, action.payload.password);
        }).switchMap(token => {
            localStorage.setItem(AUTH_STORAGE_KEY, token);
            return this.loadUserInfo(token);
        });

    private loadUserInfo(token): Observable<ActionP> {
        return this.authBackend.fetchUserInfo()
            .map(user => {
                return {
                    type: loginReducer.LOGIN_SUCCESS,
                    payload: {
                        userDetails: user,
                        token: token
                    }
                };
            });
    }
}
