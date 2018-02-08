import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../../model/course.model';
import { CoursesService } from '../../../services/courses.service';
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

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  courses: Course[] = [];
  filterSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  filterBy: FilterByPipe = new FilterByPipe();
  subscriptions = [];

  constructor(private coursesService: CoursesService,
    private dialog: MatDialog
  ) {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
    this.subscriptions.push(this.filterSubject.subscribe(filter => {
      this.coursesService.setFilter(filter);
    }));
    this.subscriptions.push(this.coursesService.getList().subscribe(list => {
      this.courses = list.toArray();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscriber => subscriber.unsubscribe());
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  deleteCourse(event: Course) {
    const dialogRef = this.dialog.open(CourseDeletePopupComponent, {
      data: {
        course: event
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.delete(event.id);
      }
    });
  }

  filterByString(filter) {
    this.filterSubject.next(filter);
  }
}
