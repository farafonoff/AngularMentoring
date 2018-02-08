import { ActionReducer, Action } from '@ngrx/store';
import { User } from "../model/user.model";
import * as _ from 'lodash';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_TOKEN = 'LOGIN_TOKEN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export class LoginState {
    constructor(
        public token: string,
        public userDetails: User,
    ) { }
}

export interface ActionP extends Action {
    payload: any;
}

export function loginReducer(state: LoginState = new LoginState(null, null), action: ActionP) {
    const newState: LoginState = _.cloneDeep(state);
    switch (action.type) {
        case LOGOUT: {
            newState.token = null;
            newState.userDetails = null;
            return newState;
        }
        case LOGIN_SUCCESS: {
            newState.token = action.payload.token;
            newState.userDetails = action.payload.userDetails;
            return newState;
        }
        default:
            return state;
    }
}
