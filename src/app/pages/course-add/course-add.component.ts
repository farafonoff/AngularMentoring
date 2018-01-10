import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  course: Course = new Course();

  constructor() { }

  ngOnInit() {
  }

  saveClick() {
    console.log(this.course);
  }

  cancelClick() {
    console.log('cancel');
  }

}
