import { FreshnessDirective } from './freshness.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div [appFreshness]="createDate"></div>`
})
class TestComponent {
  createDate: Date;
}

describe('FreshnessDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshnessDirective, TestComponent]
    });
    jasmine.clock().install();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });
  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(inputEl).toBeTruthy();
  });
  it('should show upcoming', () => {
    jasmine.clock().mockDate(new Date('2018-02-16'));
    component.createDate = new Date('2018-02-17');
    fixture.detectChanges();
    expect(inputEl.styles['border-color']).toBe('blue');
  });
  it('should show fresh', () => {
    jasmine.clock().mockDate(new Date('2018-02-17'));
    component.createDate = new Date('2018-02-16');
    fixture.detectChanges();
    expect(inputEl.styles['border-color']).toBe('green');
  });
  it('should not show old', () => {
    jasmine.clock().mockDate(new Date('2018-02-17'));
    component.createDate = new Date('2018-02-01');
    fixture.detectChanges();
    expect(inputEl.styles['border-color']).toBeFalsy();
  });
});
