import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';

function validateJuriNameFactory(): ValidatorFn {
  return (control: AbstractControl) => {
    let isValid = (control.value as string) ;
    if (isValid!=null&&isValid.indexOf("Juri")==-1) {
          return {
        juriName: {
          valid: false
        }
      };

    } else {
  return null;
    }
  }
}
@Directive({
  selector: '[juriName][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: JuriNameValidator, multi: true }
  ]
})
export class JuriNameValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = validateJuriNameFactory();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
