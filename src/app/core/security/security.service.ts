import { Ngxs, Select } from 'ngxs';
import { Injectable } from '@angular/core';
import { LoginWithFacebook, LoginWithGoogle, Logout } from './security.events';
import { Observable } from 'rxjs/Observable';
import { User } from './security.model';

@Injectable()
export class SecurityService {

  constructor(private ngxs: Ngxs) {}

  /**
   * Selectors
   */
  @Select('security.user')
  user$: Observable<User | undefined>;

  /**
   * Actions
   */
  googleLogin() {
    this.ngxs.dispatch(new LoginWithGoogle());
  }

  facebookLogin() {
    this.ngxs.dispatch(new LoginWithFacebook());
  }

  logout() {
    this.ngxs.dispatch(new Logout());
  }

}
