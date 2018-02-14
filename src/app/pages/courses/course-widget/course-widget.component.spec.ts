import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWidgetComponent } from './course-widget.component';
import { FreshnessDirective } from '../../../directives/freshness.directive';
import { FormatDurationPipe } from '../../../pipes/format-duration.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Course } from '../../../model/course.model';

describe('CourseWidgetComponent', () => {
  let component: CourseWidgetComponent;
  let fixture: ComponentFixture<CourseWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ CourseWidgetComponent, FreshnessDirective, FormatDurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseWidgetComponent);
    component = fixture.componentInstance;
    component.course = new Course();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
