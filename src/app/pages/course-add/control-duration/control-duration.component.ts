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
  useExisting: forwardRef(() => ControlDurationComponent),
  multi: true
}
export const CUSTOM_INPUT_CONTROL_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ControlDurationComponent),
  multi: true
}

@Component({
  selector: 'app-control-duration',
  templateUrl: './control-duration.component.html',
  styleUrls: ['./control-duration.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALIDATORS, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ControlDurationComponent implements OnInit, ControlValueAccessor, Validator {

  private innerValue = 0;
  private valid = false;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  
  writeValue(obj: any): void {
    console.log('writeValue ', obj);
    
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
    this.onChangeCallback(this.value);
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.valid ? null : {
      validDuration: true
    };
  }

  set value(val: any) {
    console.log(val);
    this.valid = isFinite(val);
    this.innerValue = this.valid ? Number(val) : 0;
    this.onChangeCallback(this.value);
  }

  get value(): any {
    return this.innerValue;
  }
}
