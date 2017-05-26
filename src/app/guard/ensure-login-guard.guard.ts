import {LoginComponent} from '../login/login.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnsureLoginGuardGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(component.LoginForm.dirty){
     return confirm("Are you sure to leave this page?")
   }else{
     return true;
   }
  }

}
