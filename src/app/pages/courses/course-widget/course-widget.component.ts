import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../model/course.model';

@Component({
  selector: 'app-course-widget',
  templateUrl: './course-widget.component.html',
  styleUrls: ['./course-widget.component.css']
})
export class CourseWidgetComponent implements OnInit {

  @Input() course: Course;
  @Output() delete = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  delClick() {
    this.delete.emit(this.course);
  }

}
