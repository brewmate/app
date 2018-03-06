import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Ngxs } from 'ngxs';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import { SecurityService } from '../security.service';
import { LoginRedirect } from '../security.events';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private securityService: SecurityService, private ngxs: Ngxs) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.securityService.user$.pipe(
      take(1),
      map(user => {
        if (!user) {
          console.log('not authenticated, redirecting to login');
          this.ngxs.dispatch(new LoginRedirect());
          return false;
        }
        return true;
      })
    );
  }
}
