import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { FilterByPipe } from '../../pipes/filter-by.pipe';
declare var jQuery:any;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck {
  @ViewChild('deleteConfirm') deleteModal: ElementRef;

  _deletingId;
  _courses: Course[] = [];
  get courses(): Course[] {
    return this._courses;
  }
  set courses(val: Course[]) {
    this._courses = val;
  }

  constructor(private coursesService: CoursesService) {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
    this.courses = this.coursesService.getList();
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
    this.coursesService.delete(this._deletingId);
    jQuery(this.deleteModal.nativeElement).modal('hide');
  }

  filterByString(filter) {
    const filterer = new FilterByPipe();
    this.courses = filterer.transform(this.coursesService.getList(), filter);
  }
}
