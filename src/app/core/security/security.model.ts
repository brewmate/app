import { User as FirebaseUser } from 'firebase';

export class User {
  uid: string;
  name: string;
  username = '';

  constructor(auth: FirebaseUser) {
    this.uid = auth.uid;
    this.name = auth.displayName;
  }
}

export interface AuthStoreState {
  user?: User;
}
