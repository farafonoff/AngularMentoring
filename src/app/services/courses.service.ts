import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { fakeCourses } from '../model/courses.mock';
import * as _ from 'lodash';

@Injectable()
export class CoursesService {
  private data:Course[] = [];

  constructor() { this.data = fakeCourses(); }

  getList(): Course[] {
    return this.data;
  }

  createCourse(val: Course) {
    this.data.push(val);
  }

  findById(id: number) {
    return _.find(this.data, { id });
  }

  update(val: Course) {
    let idx = _.findIndex(this.data, { id: val.id });
    if (idx > -1) {
      this.data[idx] = val;
    } else {
      this.data.push(val);
    }
  }

  delete(id: number) {
    _.remove(this.data, { id })
  }

}
