import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterTestingModule  } from '@angular/router/testing';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

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
});
