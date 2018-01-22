import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../model/course.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeLast';
import { List } from 'immutable';

@Injectable()
export class CoursesBackendService {

  constructor(private http: Http) { }


  fetchCourses(start, count, filter): Observable<List<Course>> {
    console.log('fetch');
    return this.http.get(`http://localhost:3004/courses?start=${start}&count=${count}&query=${filter}`)
      .map(response => {
        const newData = response.json();
        const mappedData = newData.map(course => {
          return new Course(
            course.id,
            course.name,
            course.date,
            course.length,
            course.description,
            course.isTopRated
          );
        });
        return List(mappedData);
      });
  }

  deleteCourse(id): Observable<any> {
    return this.http.delete(`http://localhost:3004/courses/${id}`);
  }
}
