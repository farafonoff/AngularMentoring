import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../../model/course.model';
import { CoursesService } from '../../services/courses.service';
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { FilterByPipe } from '../../pipes/filter-by.pipe';
declare var jQuery: any;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges, DoCheck {
  @ViewChild('deleteConfirm') deleteModal: ElementRef;

  _deletingId;
  courses: Course[] = [];
  filter: string = null;
  filterBy: FilterByPipe = new FilterByPipe();

  constructor(private coursesService: CoursesService) {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
    console.log('OnInit');
    this._updateModel();
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  deleteCourse(event: Course) {
    this._deletingId = event.id;
    jQuery(this.deleteModal.nativeElement).modal('show');
    // this.coursesService.delete(event.id);
  }

  _callDeleteItem() {
    console.log('deleting', this._deletingId);
    this.coursesService.delete(this._deletingId);
    jQuery(this.deleteModal.nativeElement).modal('hide');
    this._updateModel();
  }

  filterByString(filter) {
    this.filter = filter;
  }

  _updateModel() {
    this.courses = this.coursesService.getList().toArray();
    console.log(this.courses);
    if (this.filter) {
      this.courses = this.filterBy.transform(this.courses, this.filter);
    }
  }
}
