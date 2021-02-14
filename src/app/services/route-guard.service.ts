import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthappService } from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // throw new Error("Method not implemented");
    if(!this.BasicAuth.isLogged()) {
      this.route.navigate(['login']);
      return false;
    }
    else {
      return true;
    }
  }

  constructor(private BasicAuth: AuthappService, private route: Router) { }
}
