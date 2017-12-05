import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
declare var jQuery:any;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @ViewChild('deleteConfirm') deleteModal:ElementRef;

  _deletingId;
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
    this._deletingId = event.id;
    jQuery(this.deleteModal.nativeElement).modal('show');
    //this.coursesService.delete(event.id);
  }

  _callDeleteItem() {
    this.coursesService.delete(this._deletingId);
    jQuery(this.deleteModal.nativeElement).modal('hide');
  }
}
