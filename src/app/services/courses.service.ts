import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { fakeCourses } from '../model/courses.mock';
import { List } from 'immutable';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CoursesService {
  private dataSubject: BehaviorSubject<List<Course>>  = new BehaviorSubject<List<Course>>(List([]));
  private data: List<Course> = List([]);

  constructor() {
    this.data = List(fakeCourses().map(course => {
      return new Course(course.id,
        course.name,
        course.date,
        course.durationMinutes,
        course.description,
        course.topRated);
    }));
    this.dataSubject.next(this.data);
   }

  getList(): Observable<List<Course>> {
    return this.dataSubject;
  }

  createCourse(val: Course) {
    this.data = this.data.push(val);
    this.dataSubject.next(this.data);
  }

  findById(id: number): Course {
    return this.data.find(course => course.id === id);
  }

  update(val: Course) {
    const idx = this.data.findIndex(course => course.id === val.id);
    this.data = idx > -1
      ? this.data.set(idx, val)
      : this.data.push(val);
    this.dataSubject.next(this.data);
  }

  delete(id: number) {
    this.data = this.data.filterNot(course => course.id === id).toList();
    this.dataSubject.next(this.data);
  }

}
