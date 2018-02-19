import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDurationComponent } from './control-duration.component';
import { FormatDurationPipe } from '../../../pipes/format-duration.pipe';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ControlDurationComponent', () => {
  let component: ControlDurationComponent;
  let fixture: ComponentFixture<ControlDurationComponent>;
  let debugEl: DebugElement;

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
    debugEl = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.validate(null)).toBeTruthy();
  });

  it('should set value', (done) => {
    component.writeValue(200);
    fixture.detectChanges();
    fixture.whenStable().
    then(() => {
      expect(debugEl.properties.value).toBe(200);
      done();
    });
  });

  it('should get value', (done) => {
    component.registerOnChange((val) => {
      expect(val).toEqual(201);
      expect(component.validate(null)).toBeNull();
      done();
    });
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      debugEl.nativeElement.value = '201';
      debugEl.nativeElement.dispatchEvent(new Event('input'));
      debugEl.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      return fixture.whenStable();
    }).then(() => {
      component.onChange(new Event(''));
    });
  });
});
