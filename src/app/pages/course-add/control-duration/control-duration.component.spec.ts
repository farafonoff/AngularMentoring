import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDurationComponent } from './control-duration.component';

describe('ControlDurationComponent', () => {
  let component: ControlDurationComponent;
  let fixture: ComponentFixture<ControlDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDurationComponent ]
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
