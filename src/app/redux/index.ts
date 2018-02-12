import * as login from './login.reducer';
import * as courses from './courses.reducer';
import { courseReducer, CourseState } from './course.reducer';
import { AuthorsState, authorsReducer } from './authors.reducer';
export interface State {
    login: login.LoginState;
    courses: courses.CoursesState;
    courseEdit: CourseState;
    authors: AuthorsState;
}

export const reducer = {
    login: login.loginReducer,
    courses: courses.coursesReducer,
    courseEdit: courseReducer,
    authors: authorsReducer
};
