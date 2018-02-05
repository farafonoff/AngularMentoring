import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appMinValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValueDirective, multi: true}]
})
export class MinValueDirective implements Validator {
  @Input() appMinValue: string;
  validate(c: AbstractControl): { [key: string]: any; } {
    console.log (this.appMinValue);
    console.log (c.value);
    const mv = Number(this.appMinValue);
    if (Number(c.value) < mv) {
      return {
        minValue: mv
      };
    } else {
      return null;
    }
  }
  registerOnValidatorChange?(fn: () => void): void {
  }

  constructor() { }

}
