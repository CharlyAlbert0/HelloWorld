import {Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';


import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/pages/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

  canDeactivate(component: CanComponentDeactivate) {
    debugger
    // alert(component.canDeactivate)
    // return component.canDeactivate ? component.canDeactivate() : true;
  }
}
