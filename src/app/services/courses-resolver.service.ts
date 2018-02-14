import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Course } from '../model/course.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../redux/index';
import { Actions } from '@ngrx/effects';
import { COURSE_OPEN, COURSE_LOAD_SUCCESS, COURSE_NOT_FOUND, ActionP } from '../redux/course.reducer';
import { noop } from 'lodash';
import { AUTHORS_LOAD } from '../redux/authors.reducer';

@Injectable()
export class CoursesResolverService implements Resolve<Course> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const id = route.params.id;
    this.store.dispatch({type: COURSE_OPEN, payload: id});
    return this.action$
    .ofType(COURSE_LOAD_SUCCESS, COURSE_NOT_FOUND)
    .take(1)
    .switchMap((action: ActionP) => {
      if (action.type === COURSE_NOT_FOUND) {
        this.router.navigate(['courses', 'missing-course']);
        return Observable.empty();
      } else {
        return Observable.of(action.payload);
      }
    });
  }

  constructor(private router: Router, private store: Store<State>,
    private action$: Actions) {  }

}
