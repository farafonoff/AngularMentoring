import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { OnChanges, DoCheck, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FilterByPipe } from '../../pipes/filter-by.pipe';
import { Subject } from 'rxjs/Subject';
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
  filter: string = null;
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
    this.subscriptions.push(this.coursesService.getList().subscribe(
      list => {
        this.courses = list.toArray();
        if (this.filter) {
          this.courses = this.filterBy.transform(this.courses, this.filter);
        }
        this.courses = this.courses.filter(course => moment(course.createDate).diff(moment(), 'days') > -14);
      }
    ));
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
    this.filter = filter;
  }
}
