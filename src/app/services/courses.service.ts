import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { fakeCourses } from '../model/courses.mock';
import { List } from 'immutable';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CoursesBackendService } from './courses-backend.service';

@Injectable()
export class CoursesService {
  pageSize = 10;
  start = 0;
  outOfData = false;
  filter = '';
  private dataSubject: BehaviorSubject<List<Course>>  = new BehaviorSubject<List<Course>>(List([]));

  constructor(private backend: CoursesBackendService) {
  }

  loadData() {
    this.backend.fetchCourses(this.start, this.pageSize, this.filter).subscribe(data => {
      console.log(data);
      this.outOfData = data.count() < this.pageSize;
      this.dataSubject.next(data);
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

  createCourse(val: Course) {
  }

  findById(id: number): Observable<Course> {
    return this.backend.fetchCourse(id);
  }

  update(val: Course) {
  }

  delete(id: number) {
    this.backend.deleteCourse(id).subscribe(result => {
      console.log(result);
      this.loadData();
    });
  }

}
