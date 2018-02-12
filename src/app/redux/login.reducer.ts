import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../model/user.model';
import * as _ from 'lodash';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export class LoginState {
    constructor(
        public token: string,
        public userDetails: User,
        public state: string
    ) { }
}

export interface ActionP extends Action {
    payload: any;
}

export function loginReducer(state: LoginState = new LoginState(null, null, 'initial'), action: ActionP) {
    switch (action.type) {
        case LOGIN: {
            return { ...state, state: 'initial' };
        }
        case LOGOUT_SUCCESS: {
            return { ...state, token: null, userDetails: null, state: 'logout' };
        }
        case LOGIN_SUCCESS: {
            return { ...state, token: action.payload.token, userDetails: action.payload.userDetails, state: 'success' };
        }
        default:
            return state;
    }
}
