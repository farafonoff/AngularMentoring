import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

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
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
