import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDateComponent } from './control-date.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormatDurationPipe } from '../../../pipes/format-duration.pipe';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';

describe('ControlDateComponent', () => {
  let component: ControlDateComponent;
  let fixture: ComponentFixture<ControlDateComponent>;
  let debugEl: DebugElement;

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
    debugEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.validate(null)).toBeTruthy();
  });

  it('should set value', (done) => {
    const mockDate = new Date('02/19/2018');
    component.writeValue(mockDate);
    fixture.detectChanges();
    fixture.whenStable().
    then(() => {
      expect(debugEl.properties.value).toBe('19/02/2018');
      done();
    });
  });

  it('should get value', (done) => {
    component.registerOnChange((date) => {
      const mockDate = new Date('02/19/2018');
      expect(date).toEqual(mockDate);
      expect(component.validate(null)).toBeNull();
      done();
    });
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      debugEl.nativeElement.value = '19/02/2018';
      debugEl.nativeElement.dispatchEvent(new Event('input'));
      debugEl.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      return fixture.whenStable();
    }).then(() => {
      component.onChange(new Event(''));
    });
  });
});
