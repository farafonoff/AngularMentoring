import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDateComponent } from './control-date.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { FormatDurationPipe } from '../../../pipes/format-duration.pipe';

describe('ControlDateComponent', () => {
  let component: ControlDateComponent;
  let fixture: ComponentFixture<ControlDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ControlDateComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
