import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';
import { AuthorsService } from '../../services/authors.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ControlDateComponent } from './control-date/control-date.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit, OnDestroy {
  allAuthors = [];
  subscriptions = [];
  isNew: boolean;
  courseId: number;
  courseForm = this.buildForm(new Course());

  constructor(
    private authorsService: AuthorsService,
    private coursesService: CoursesService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute) {
    this.subscriptions.push(authorsService.getList().subscribe(authors => {
      this.allAuthors = authors.toArray();
    }));
    route.data.combineLatest(route.params, (data, params) => [data.new, params.id])
    .subscribe(config => {
      this.isNew = config[0];
      if (!this.isNew) {
        this.courseId = config[1];
        coursesService.findById(this.courseId).subscribe((course) => this.courseForm.reset(course));
      }
    });
  }

  buildForm(course) {
    return new FormGroup({
      name: new FormControl(course.name, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(course.description, [Validators.required, Validators.maxLength(500)]),
      createDate: new FormControl(course.createDate, [Validators.required]),
      durationMinutes: new FormControl(course.durationMinutes, [Validators.required]),
      authors: new FormControl(course.authors, [Validators.required])
    });
  }

  dirtyAndInvalid(controlName: string) {
    return this.courseForm.get(controlName).dirty && this.courseForm.get(controlName).status === 'INVALID';
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscriber => subscriber.unsubscribe());
  }

  submit() {
    if (this.courseForm.valid) {
      if (this.isNew) {
        this.coursesService.create(this.courseForm.value);
      } else {
        const course = Object.assign({}, this.courseForm.value, { id: this.courseId });
        this.coursesService.update(course);
      }
      this.router.navigate(['courses']);
    }
  }

  cancelClick() {
    this.router.navigate(['courses']);
  }

}
