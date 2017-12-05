import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';
import { fakeCourses } from '../../model/courses.mock';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesService) { 
    this.courses = [];
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
    this.courses = this.coursesService.getList();
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  deleteCourse(event: Course) {
    console.log(event.id);
  }

}
