import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PreventFormComponent } from "app/shared/preventmodel";


@Injectable()
export class PreventGuard implements CanDeactivate<PreventFormComponent> {

  canDeactivate(component: PreventFormComponent) {

    if(component.hasUnsavedChanges())
            return confirm("are yu sure?")
    return true;

  }

}
