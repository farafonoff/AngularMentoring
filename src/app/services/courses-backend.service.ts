import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../model/course.model';
import { Author } from '../model/author.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeLast';
import { List } from 'immutable';

class CourseDTO {
  constructor(
    public id: number,
    public name: string,
    public date: any,
    public length: number,
    public description: string,
    public isTopRated: boolean,
    public authors: Author[]) { }
}


@Injectable()
export class CoursesBackendService {

  constructor(private http: Http) { }


  fetchCourses(start, count, filter): Observable<List<Course>> {
    console.log('fetch');
    return this.http.get(`http://localhost:3004/courses?start=${start}&count=${count}&query=${filter}`)
      .map(response => {
        const newData = response.json();
        const mappedData = newData.map((course: CourseDTO) => {
          return new Course(
            course.id,
            course.name,
            course.date,
            course.length,
            course.description,
            course.isTopRated,
            course.authors.map(author => new Author(author.id, author.firstName, author.lastName))
          );
        });
        return List(mappedData);
      });
  }

  fetchCourse(id): Observable<Course> {
    console.log('fetch');
    return this.http.get(`http://localhost:3004/courses/${id}`)
      .map(response => {
        const course = response.json();
        const mappedData = new Course(
          course.id,
          course.name,
          course.date,
          course.length,
          course.description,
          course.isTopRated,
          course.authors.map(author => new Author(author.id, author.firstName, author.lastName))
        );
        return mappedData;
      });
  }


  deleteCourse(id): Observable<any> {
    return this.http.delete(`http://localhost:3004/courses/${id}`);
  }

  create(course: Course) {
    return this.http.post(`http://localhost:3004/courses/`,
      new CourseDTO(
        course.id,
        course.name,
        course.createDate,
        course.durationMinutes,
        course.description,
        course.topRated,
        course.authors));
  }

  update(course: Course) {
    return this.http.put(`http://localhost:3004/courses/${course.id}`,
      new CourseDTO(
        course.id,
        course.name,
        course.createDate,
        course.durationMinutes,
        course.description,
        course.topRated,
        course.authors));
  }
}
