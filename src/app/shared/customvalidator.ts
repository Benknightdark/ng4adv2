import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, FormControl } from "@angular/forms";
import { Directive } from "@angular/core";

export function forbiddenNameValidator(control: AbstractControl) {
  if (control.value.indexOf("ben") == -1) {
    return {
      "no match ben ": true
    }
  } else {
    return null;
  }
};


