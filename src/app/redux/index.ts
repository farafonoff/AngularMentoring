import * as login from './login.reducer';

export interface State {
    login: login.LoginState;
}

export const reducer = {
    login: login.loginReducer
};
