import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { OnChanges, DoCheck, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FilterByPipe } from '../../pipes/filter-by.pipe';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
declare var jQuery: any;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @ViewChild('deleteConfirm') deleteModal: ElementRef;

  _deletingId;
  courses: Course[] = [];
  filter: string = null;
  filterSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  filterBy: FilterByPipe = new FilterByPipe();
  subscriptions = [];

  constructor(private coursesService: CoursesService) {
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
    this._deletingId = event.id;
    jQuery(this.deleteModal.nativeElement).modal('show');
    // this.coursesService.delete(event.id);
  }

  _callDeleteItem() {
    console.log('deleting', this._deletingId);
    this.coursesService.delete(this._deletingId);
    jQuery(this.deleteModal.nativeElement).modal('hide');
  }

  filterByString(filter) {
    this.filter = filter;
  }
}
