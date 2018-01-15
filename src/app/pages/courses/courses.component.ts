import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { OnChanges, DoCheck, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FilterByPipe } from '../../pipes/filter-by.pipe';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/operator/do';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { CourseDeletePopupComponent } from './course-delete-popup/course-delete-popup.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @ViewChild('deleteConfirm') deleteModal: ElementRef;

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
    this.subscriptions.push(
      Observable.combineLatest(
        this.coursesService.getList(),
        this.filterSubject,
        (list, filter) => {
          let courses = list.toArray();
          if (filter) {
            courses = this.filterBy.transform(courses, filter);
          }
          return courses;
        }).map(courses => courses.filter(course => moment(course.createDate).diff(moment(), 'days') > -14))
        .subscribe(courses => { this.courses = courses; })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(unsubscribe => unsubscribe());
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
