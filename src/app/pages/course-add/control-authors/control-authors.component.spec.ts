import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAuthorsComponent } from './control-authors.component';
import { Author } from '../../../model/author.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ControlAuthorsComponent', () => {
  let component: ControlAuthorsComponent;
  let fixture: ComponentFixture<ControlAuthorsComponent>;
  let debugEl: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlAuthorsComponent ]
    })
    .compileComponents();
  }));
  const a1 = new Author(1, 'a', 'b');
  const a2 = new Author(2, 'c', 'd');
  const a3 = new Author(3, 'd', 'e');
  const authors = [
    a1, a2, a3
  ];

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.allAuthors = authors;
    debugEl = fixture.debugElement.query(By.css('.scroll-wrapper'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set value', () => {
    component.writeValue([new Author(1, 'a', 'b'), new Author(2, 'c', 'd')]);
    fixture.detectChanges();
    const checked = debugEl.queryAll(By.css('input:checked'));
    expect(checked.length).toEqual(2);
  });
  it('should change value', (done) => {
    component.writeValue([]);
    component.registerOnChange((value) => {
      expect(value.length).toBe(1);
      done();
    });
    fixture.detectChanges();
    const checked = debugEl.queryAll(By.css('input'));
    checked[1].nativeElement.click();
    fixture.detectChanges();
  });
});
