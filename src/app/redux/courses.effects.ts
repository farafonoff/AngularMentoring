import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import * as loginReducer from './login.reducer';
import { Action, Store } from '@ngrx/store';
import { ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { AuthBackendService } from '../services/auth-backend.service';
import { User } from '../model/user.model';
import { ActionP } from './login.reducer';
import { Router } from '@angular/router';
import { State } from './index';
import { COURSES_OPEN, COURSES_NEXT_PAGE, COURSES_PREV_PAGE, COURSES_LOAD_SUCCESS, COURSE_DELETE, COURSES_SEARCH } from './courses.reducer';
import { CoursesBackendService } from '../services/courses-backend.service';
import { COURSE_SAVED } from './course.reducer';

export const AUTH_STORAGE_KEY = 'auth_token';

@Injectable()
export class CoursesEffects {
    constructor(private actions: Actions,
        private coursesBackend: CoursesBackendService,
        private router: Router,
        private store: Store<State>
    ) {
    }

    @Effect() delete = this.actions
        .ofType(COURSE_DELETE)
        .switchMap((action: ActionP) => {
            return this.coursesBackend.deleteCourse(action.payload.id);
        })
        .switchMap(() => Observable.empty());

    @Effect() load = this.actions
        .ofType(COURSES_OPEN, COURSES_NEXT_PAGE, COURSES_PREV_PAGE, COURSE_DELETE, COURSES_SEARCH, COURSE_SAVED)
        .withLatestFrom(this.store.select('courses'))
        .switchMap(([action, state]) => {
            console.log(state);
            return this.coursesBackend.fetchCourses(state.start, state.pageSize, state.search);
        })
        .map((courses) => ({ type: COURSES_LOAD_SUCCESS, payload: courses }));
}
