import { User } from './security.model';

// Actions
export class CheckLogin {}
export class LoginWithGoogle {}
export class LoginWithFacebook {}
export class LoginWithEmailAndPassword {
  constructor(public email: string, public password: string) {}
}
export class Logout {}

// Events
export class LoginRedirect {}

export class LoginSuccess {
  constructor(public user: User) {}
}
export class LoginFailed {
  constructor(public error: any) {}
}

