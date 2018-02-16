import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent, Breadcrumb } from './breadcrumb.component';
import { RouterTestingModule  } from '@angular/router/testing';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course.model';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

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
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const shortRoute = {
    firstChild: {
      snapshot: { url: [] },
      firstChild: {
        snapshot: {
          url: [ { path: 'test1'} ],
          data: {}
        },
      }
    }
  };

  const longRoute = {
    firstChild: {
      snapshot: { url: [] },
      firstChild: {
        snapshot: {
          url: [ { path: 'test1'} ],
          data: {}
        },
        firstChild: {
          snapshot: {
            url: [ { path: 'test2'} ],
            data: { breadcrumb: 'Test2'}
          },
        }
      }
    }
  };

  const longRouteWithCourse = {
    firstChild: {
      snapshot: { url: [] },
      firstChild: {
        snapshot: {
          url: [ { path: 'test1'} ],
          data: {}
        },
        firstChild: {
          snapshot: {
            url: [ { path: 'test2'} ],
            data: { course: new Course(1, 'TestCourse')}
          },
        }
      }
    }
  };

  it('should return short breadcrumbs', () => {
    const result: Breadcrumb[] = component.getBreadcrumbs((<ActivatedRoute>shortRoute));
    expect(result.length).toBe(1);
    expect(result[0].path).toEqual(['test1']);
  });

  it('should return long breadcrumbs', () => {
    const result: Breadcrumb[] = component.getBreadcrumbs((<any>longRoute));
    expect(result.length).toBe(2);
    expect(result[0].path).toEqual(['test1']);
    expect(result[1].path).toEqual(['test1', 'test2']);
    expect(result[1].title).toEqual('Test2');
  });

  it('should return long breadcrumbs with course', () => {
    const result: Breadcrumb[] = component.getBreadcrumbs((<any>longRouteWithCourse));
    expect(result.length).toBe(2);
    expect(result[0].path).toEqual(['test1']);
    expect(result[1].path).toEqual(['test1', 'test2']);
    expect(result[1].title).toEqual('TestCourse');
  });
});
