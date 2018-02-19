import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddComponent } from './course-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { ControlDateComponent } from './control-date/control-date.component';
import { ControlDurationComponent } from './control-duration/control-duration.component';
import { ControlAuthorsComponent } from './control-authors/control-authors.component';
import { FormatDurationPipe } from '../../pipes/format-duration.pipe';
import { StoreModule, Store } from '@ngrx/store';
import { reducer, State } from '../../redux/index';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { COURSE_NEW } from '../../redux/course.reducer';
import { By } from '@angular/platform-browser';

describe('CourseAddComponent', () => {
  let component: CourseAddComponent;
  let fixture: ComponentFixture<CourseAddComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        StoreModule.forRoot(reducer),
        NoopAnimationsModule
      ],
      declarations: [ CourseAddComponent,
        ControlDateComponent,
        ControlDurationComponent,
        ControlAuthorsComponent,
        FormatDurationPipe
       ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show new course', (done) => {
    store.dispatch({type: COURSE_NEW});
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('input')).properties.value).toEqual('');
      done();
    });
  });

  it('should show existing course', (done) => {
    store.dispatch(action_course);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('input')).properties.value).toEqual('duis mollit reprehenderit ad');
      done();
    });
  });

  it('should save course', (done) => {
    store.dispatch(action_course);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const debugEl = fixture.debugElement.query(By.css('input'));
      debugEl.nativeElement.value = 'Test';
      debugEl.nativeElement.dispatchEvent(new Event('input'));
      debugEl.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      return fixture.whenStable();
    }).then(() => {
      fixture.debugElement.query(By.css('button[type=submit]')).nativeElement.click();
      return fixture.whenStable();
    }).then(() => {
      store.select('courseEdit').subscribe((v) => {
        expect(v.course.name).toBe('Test');
        done();
      });
    });
  });

  const action_course = {
    type: 'COURSE_LOAD_SUCCESS',
    payload: {
      id: 8693,
      name: 'duis mollit reprehenderit ad',
      createDate: '2017-09-28T04:39:24+00:00',
      durationMinutes: 157,
      description: 'Est minim ea aute sunt laborum minim eu excepteur. Culpa sint exercitation mollit enim ad culpa aliquip laborum cillum. Dolor officia culpa labore ex eiusmod ut est ea voluptate ea nostrud.',
      topRated: false,
      authors: [
        {
          id: 1370,
          firstName: 'Polly',
          lastName: 'Sosa'
        }
      ]
    }
  };
});
