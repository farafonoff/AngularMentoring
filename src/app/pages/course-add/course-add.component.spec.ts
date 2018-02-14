import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddComponent } from './course-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('CourseAddComponent', () => {
  let component: CourseAddComponent;
  let fixture: ComponentFixture<CourseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, AppModule ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
