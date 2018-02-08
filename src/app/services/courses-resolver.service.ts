import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from './courses.service';
import { Course } from '../model/course.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesResolverService implements Resolve<Course> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const id = route.params.id;
    console.log(id);
    return this.coursesService.findById(id);
  }

  constructor(private coursesService: CoursesService) {  }

}
