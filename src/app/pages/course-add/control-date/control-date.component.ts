import { Component, OnInit, forwardRef } from '@angular/core';
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

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ControlDateComponent),
  multi: true
}
export const CUSTOM_INPUT_CONTROL_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useValue: (c: FormControl) => {
    if (!c.value.match('[0-9][0-9]/[0-9][0-9]/[0-9][0-9]([0-9][0-9])?')) {
      
    } else {
      return null;
    }
  },
  multi: true
}
@Component({
  selector: 'app-control-date',
  templateUrl: './control-date.component.html',
  styleUrls: ['./control-date.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CUSTOM_INPUT_CONTROL_VALIDATORS]
})
export class ControlDateComponent implements OnInit, ControlValueAccessor {
  private innerValue: string = '';
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  
  writeValue(obj: any): void {
    console.log('writeValue ', obj)
    this.innerValue = obj;
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

  constructor() { }

  ngOnInit() {
  }

  onBlur(evt: Event) {
    this.onTouchedCallback();
  }

  onChange(evt: Event) {
    this.onChangeCallback(this.innerValue);
  }

  validate(c: AbstractControl): ValidationErrors {
    return {};
  }

  //get accessor
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

}
