import { ActionReducer, Action } from '@ngrx/store';
import { User } from "../model/user.model";
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
    const newState: LoginState = _.cloneDeep(state);
    switch (action.type) {
        case LOGIN: {
            newState.state = 'initial';
            return newState;
        }
        case LOGOUT_SUCCESS: {
            newState.token = null;
            newState.userDetails = null;
            newState.state = 'logout';
            return newState;
        }
        case LOGIN_SUCCESS: {
            newState.state = 'success';
            newState.token = action.payload.token;
            newState.userDetails = action.payload.userDetails;
            return newState;
        }
        default:
            return state;
    }
}
