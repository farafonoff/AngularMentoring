import * as login from './login.reducer';
import * as courses  from './courses.reducer';
export interface State {
    login: login.LoginState;
    courses: courses.CoursesState;
}

export const reducer = {
    login: login.loginReducer,
    courses: courses.courseReducer
};
