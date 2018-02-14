import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDurationComponent } from './control-duration.component';
import { FormatDurationPipe } from '../../../pipes/format-duration.pipe';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ControlDurationComponent', () => {
  let component: ControlDurationComponent;
  let fixture: ComponentFixture<ControlDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ControlDurationComponent, FormatDurationPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
