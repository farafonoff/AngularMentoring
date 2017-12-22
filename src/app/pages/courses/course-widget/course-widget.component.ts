import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../model/course.model';

@Component({
  selector: 'app-course-widget',
  templateUrl: './course-widget.component.html',
  styleUrls: ['./course-widget.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
