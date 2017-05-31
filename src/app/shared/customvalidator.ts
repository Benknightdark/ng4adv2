import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl)
{
  if(control.value.indexOf("ben")==-1){
    return {
      "no match ben ":true
    }
  }else{
     return null;
  }



  };
