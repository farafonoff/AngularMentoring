import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms/src/directives/control_value_accessor';

@Component({
  selector: 'app-control-date',
  templateUrl: './control-date.component.html',
  styleUrls: ['./control-date.component.css']
})
export class ControlDateComponent implements OnInit, ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
  }

}
