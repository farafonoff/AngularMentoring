import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAuthorsComponent } from './control-authors.component';

describe('ControlAuthorsComponent', () => {
  let component: ControlAuthorsComponent;
  let fixture: ComponentFixture<ControlAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
