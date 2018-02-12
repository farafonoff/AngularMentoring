import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../../model/course.model';
import { OnChanges, DoCheck, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FilterByPipe } from '../../../pipes/filter-by.pipe';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/operator/do';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { CourseDeletePopupComponent } from '../course-delete-popup/course-delete-popup.component';
import { Store } from '@ngrx/store';
import { State } from '../../../redux/index';
import {
  CoursesState,
  COURSES_NEXT_PAGE,
  COURSES_PREV_PAGE,
  COURSES_OPEN,
  COURSES_SEARCH,
  COURSE_DELETE
} from '../../../redux/courses.reducer';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  state: Observable<CoursesState>;
  filterSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  filterBy: FilterByPipe = new FilterByPipe();
  subscriptions = [];

  constructor(
    private dialog: MatDialog,
    private store: Store<State>
  ) {
    console.log('constructor');
    this.store.dispatch({ type: COURSES_OPEN });
    this.state = store.select('courses');
  }

  deleteCourse(event: Course) {
    const dialogRef = this.dialog.open(CourseDeletePopupComponent, {
      data: {
        course: event
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch({ type: COURSE_DELETE, payload: event });
      }
    });
  }

  filterByString(filter) {
    this.store.dispatch({ type: COURSES_SEARCH, payload: filter });
  }

  nextPage() {
    this.store.dispatch({ type: COURSES_NEXT_PAGE });
  }
  prevPage() {
    this.store.dispatch({ type: COURSES_PREV_PAGE });
  }
}
