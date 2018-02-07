import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { 
  ControlValueAccessor, 
  NG_VALUE_ACCESSOR, 
  NG_VALIDATORS, 
  FormControl, 
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { noop } from 'lodash';
import * as _ from 'lodash';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ControlAuthorsComponent),
  multi: true
};

export const CUSTOM_INPUT_CONTROL_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ControlAuthorsComponent),
  multi: true
};

@Component({
  selector: 'app-control-authors',
  templateUrl: './control-authors.component.html',
  styleUrls: ['./control-authors.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CUSTOM_INPUT_CONTROL_VALIDATORS]
})
export class ControlAuthorsComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() allAuthors = [];
  private selectedAuthors = [];
  private isValid = false;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  writeValue(obj: any): void {
    console.log('writeValue ', obj);
    this.selectedAuthors = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
  }

  validate(c: AbstractControl): ValidationErrors {
    return null;
  }

  toggleAuthor(author, event) {
    if (!event.target.checked) {
      _.remove(this.selectedAuthors, author);
    } else {
      this.selectedAuthors.push(author);
    }
    this.onChangeCallback(this.selectedAuthors);
    this.onTouchedCallback();
  }

  isAuthorSelected(author): boolean {
    return !!_.find(this.selectedAuthors, author);
  }
}
