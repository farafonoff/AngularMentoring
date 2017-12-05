import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  get courses(): Course[] {
    return this.coursesService.getList();
  }

  constructor(private coursesService: CoursesService) { 
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  deleteCourse(event: Course) {
    this.coursesService.delete(event.id);
  }

}
