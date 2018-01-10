import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDeletePopupComponent } from './course-delete-popup.component';

describe('CourseDeletePopupComponent', () => {
  let component: CourseDeletePopupComponent;
  let fixture: ComponentFixture<CourseDeletePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDeletePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
