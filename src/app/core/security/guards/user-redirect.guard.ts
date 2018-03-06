import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';
import { SecurityService } from '../security.service';

@Injectable()
export class UserRedirectGuard implements CanActivate {

  constructor(private securityService: SecurityService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.securityService.user$.pipe(
      take(1),
      map(user => {
        this.router.navigateByUrl(user ? '/dashboard' : '/start');
        return false;
      })
    );
  }

}
