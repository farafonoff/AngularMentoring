import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from './courses.service';
import { Course } from '../model/course.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable()
export class CoursesResolverService implements Resolve<Course> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const id = route.params.id;
    console.log(id);
    return this.coursesService
      .findById(id)
      .catch(error => {
        this.router.navigate(['courses', 'missing-course']);
        return Observable.of(null);
      });
  }

  constructor(private coursesService: CoursesService, private router: Router) {  }

}
