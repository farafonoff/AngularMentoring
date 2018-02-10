import * as login from './login.reducer';
import * as courses  from './courses.reducer';
import { courseReducer, CourseState } from './course.reducer';
export interface State {
    login: login.LoginState;
    courses: courses.CoursesState;
    courseEdit: CourseState
}

export const reducer = {
    login: login.loginReducer,
    courses: courses.coursesReducer,
    courseEdit: courseReducer
};
