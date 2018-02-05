import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';
import { AuthorsService } from '../../services/authors.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit, OnDestroy {
  course: Course = new Course();
  allAuthors = [];
  subscriptions = [];

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

  submit(form) {
    console.log(form);
    if (form.valid) {
      this.course = form.value;
      console.log(this.course);
    }
  }

  cancelClick() {
    console.log('cancel');
  }

}
