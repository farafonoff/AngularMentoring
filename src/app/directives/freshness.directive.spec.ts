import { FreshnessDirective } from './freshness.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div [appFreshness]="10"></div>` 
})
class TestComponent {
}

describe('FreshnessDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshnessDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
  });
  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(inputEl).toBeTruthy();
  });
});
