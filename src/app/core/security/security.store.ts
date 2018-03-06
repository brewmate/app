import { Router } from '@angular/router';

import { Action, Mutation, Store } from 'ngxs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User as FirebaseUser } from 'firebase';
import { catchError, map, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';

import {
  CheckLogin,
  LoginWithFacebook,
  LoginWithGoogle,
  LoginFailed,
  LoginRedirect,
  LoginSuccess,
  LoginWithEmailAndPassword
} from './security.events';
import { AuthStoreState, User } from './security.model';


@Store({
  defaults: {
    user: null
  }
})
export class SecurityStore {

  constructor(private auth: AngularFireAuth, private router: Router) {
    console.log('SecurityStore');
  }

  /**
   * Actions
   */

  @Action(CheckLogin)
  checkLogin(state: AuthStoreState, action: CheckLogin) {
    console.log('CheckLogin');
    return this.auth.authState.pipe(
      take(1),
      map((auth: FirebaseUser): LoginSuccess | LoginRedirect => {
        if (auth) {
          return new LoginSuccess(new User(auth));
        }
        return new LoginRedirect();
      })
    );
  }

  @Action(LoginWithGoogle)
  loginWithGoogle(state: AuthStoreState, action: LoginWithGoogle) {
    const provider = new firebase.auth.GoogleAuthProvider();
    return fromPromise(this.auth.auth.signInWithPopup(provider)).pipe(
      map((response: { user: FirebaseUser}) => {
        return new LoginSuccess(new User(response.user));
      }),
      catchError(error => of(new LoginFailed(error)))
    );
  }

  @Action(LoginWithFacebook)
  loginWithFacebook(state: AuthStoreState, action: LoginWithFacebook) {
    const provider = new firebase.auth.FacebookAuthProvider();
    return fromPromise(this.auth.auth.signInWithPopup(provider)).pipe(
      map((response: { user: FirebaseUser}) => {
        return new LoginSuccess(new User(response.user));
      }),
      catchError(error => of(new LoginFailed(error)))
    );
  }

  @Action(LoginWithEmailAndPassword)
  loginWithEmailAndPassword(state: AuthStoreState, action: LoginWithEmailAndPassword) {
    return fromPromise(this.auth.auth.signInWithEmailAndPassword(action.email, action.password)).pipe(
      map((auth: FirebaseUser) => {
        return new LoginSuccess(new User(auth));
      }),
      catchError(error => of(new LoginFailed(error)))
    );
  }

  /**
   * Events
   */

  @Action(LoginSuccess)
  onLoginSuccess() {
    console.log('onLoginSuccess');
    this.router.navigateByUrl('/dashboard');
  }

  @Action(LoginRedirect)
  onLoginRedirect() {
    console.log('onLoginRedirect');
    this.router.navigateByUrl('/auth/login');
  }

  @Mutation(LoginSuccess)
  setUserStateOnSuccess(state: AuthStoreState, event: LoginSuccess) {
    console.log('setUserStateOnSuccess');
    state.user = event.user;
  }

  @Mutation(LoginFailed)
  setUserStateOnFailure(state: AuthStoreState, event: LoginFailed) {
    state.user = undefined;
  }
}
