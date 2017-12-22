import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { fakeCourses } from '../model/courses.mock';
import { List } from 'immutable';

@Injectable()
export class CoursesService {
  private data: List<Course> = List([]);

  constructor() { this.data = List(fakeCourses()); }

  getList(): List<Course> {
    return this.data;
  }

  createCourse(val: Course) {
    this.data = this.data.push(val);
  }

  findById(id: number): Course {
    return this.data.find(course => course.id === id);
  }

  update(val: Course) {
    const idx = this.data.findIndex(course => course.id === val.id);
    this.data = idx > -1
      ? this.data.set(idx, val)
      : this.data.push(val);
  }

  delete(id: number) {
    this.data = this.data.filterNot(course => course.id === id).toList();
  }

}
