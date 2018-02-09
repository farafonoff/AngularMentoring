import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { fakeCourses } from '../model/courses.mock';
import { List } from 'immutable';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CoursesBackendService } from './courses-backend.service';
import { State } from '../redux/index';
import { Store } from '@ngrx/store';

@Injectable()
export class CoursesService {
  pageSize = 10;
  start = 0;
  outOfData = false;
  filter = '';
  private dataSubject: BehaviorSubject<List<Course>>  = new BehaviorSubject<List<Course>>(List([]));

  constructor(private backend: CoursesBackendService, private store: Store<State>) {
  }

  rxGetData(): Observable<Course[]> {
    return Observable.of();
    // return this.store.select('courses').map()
  }

  loadData() {
    this.backend.fetchCourses(this.start, this.pageSize, this.filter).subscribe(data => {
      console.log(data);
      this.outOfData = data.length < this.pageSize;
      this.dataSubject.next(List(data));
    });
  }

  getList(): Observable<List<Course>> {
    return this.dataSubject;
  }

  setFilter(filter) {
    this.filter = filter;
    this.loadData();
  }

  nextPage() {
    if (!this.outOfData) {
      this.start += this.pageSize;
    }
    this.loadData();
  }

  prevPage() {
    this.start -= this.pageSize;
    if (this.start <= 0) {
      this.start = 0;
    }
    this.loadData();
  }

  create(val: Course) {
    this.backend.create(val).subscribe(() => this.loadData());
  }

  update(val: Course) {
    this.backend.update(val).subscribe(() => this.loadData());
  }

  findById(id: number): Observable<Course> {
    return this.backend.fetchCourse(id);
  }

  delete(id: number) {
    this.backend.deleteCourse(id).subscribe(result => {
      console.log(result);
      this.loadData();
    });
  }

}
