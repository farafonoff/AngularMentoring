import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';
import { AuthorsService } from '../../services/authors.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ControlDateComponent } from './control-date/control-date.component';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit, OnDestroy {
  course: Course = new Course();
  allAuthors = [];
  subscriptions = [];

  courseForm = new FormGroup({
        name: new FormControl(this.course.name, [Validators.required, Validators.maxLength(50)]),
        description: new FormControl(this.course.description, [Validators.required, Validators.maxLength(500)]),
        createDate: new FormControl(this.course.createDate, [Validators.required]),
        durationMinutes: new FormControl(this.course.durationMinutes, [Validators.required]),
        authors: new FormControl(this.course.authors, [Validators.required])
  });

  dirtyAndInvalid(controlName: string) {
    return this.courseForm.get(controlName).dirty && this.courseForm.get(controlName).status === 'INVALID';
  }

  constructor(private authorsService: AuthorsService) {
    this.subscriptions.push(authorsService.getList().subscribe(authors => {
      this.allAuthors = authors.toArray();
    }));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(fn => fn());
  }

  submit() {
    if (this.courseForm.valid) {
      this.course = this.courseForm.value;
      console.log(this.course);
    }
  }

  cancelClick() {
    console.log('cancel');
  }

}
