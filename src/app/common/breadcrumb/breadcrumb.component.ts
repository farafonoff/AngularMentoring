import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import * as _ from 'lodash';
import { Course } from '../../model/course.model';

export class Breadcrumb {
  constructor(
    public path: string[],
    public title: string
  ) {}
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      console.log(event);
      const root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  ngOnInit() {
  }

  getBreadcrumbs(activatedRoute: ActivatedRoute): Breadcrumb[] {
    const result = [];
    let currentRoute = activatedRoute.firstChild;
    const currentPath = [];
    while (currentRoute) {
      if (currentRoute.snapshot.url.length) {
        const segment = currentRoute.snapshot.url[0].path;
        const breadcrumb = currentRoute.snapshot.data.breadcrumb;
        const course: Course = currentRoute.snapshot.data.course;
        console.log(segment);
        console.log(breadcrumb);
        currentPath.push(segment);
        let label = breadcrumb || segment;
        if (course) {
          label = course.name;
        }
        result.push(new Breadcrumb(_.cloneDeep(currentPath), label));
      }
      currentRoute = currentRoute.firstChild;
    }
    return result;
  }

}
