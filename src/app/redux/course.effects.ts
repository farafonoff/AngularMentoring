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
import { CoursesBackendService } from '../services/courses-backend.service';
import { COURSE_OPEN, COURSE_LOAD_SUCCESS, COURSE_NOT_FOUND, COURSE_SAVE, CourseState, COURSE_SAVED } from './course.reducer';

@Injectable()
export class CourseEffects {
    constructor(private actions: Actions,
        private coursesBackend: CoursesBackendService,
        private router: Router,
        private store: Store<State>
    ) {
    }

    @Effect() load = this.actions
        .ofType(COURSE_OPEN)
        .switchMap((action: ActionP) =>
            this.coursesBackend.fetchCourse(action.payload)
            .map(course => {
                return { type: COURSE_LOAD_SUCCESS, payload: course}; })
            .catch(() => Observable.of({ type: COURSE_NOT_FOUND }))
        );

    @Effect() save = this.actions
        .ofType(COURSE_SAVE)
        .withLatestFrom(this.store.select('courseEdit'))
        .switchMap(([action, state]) => {
            if (state.isNew) {
                return this.coursesBackend.create((<ActionP>action).payload);
            } else {
                return this.coursesBackend.update((<ActionP>action).payload);
            }
        }).map(() => ({type: COURSE_SAVED}));
}
