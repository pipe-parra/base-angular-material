import { Injectable, NgZone } from '@angular/core';
// import { User } from '../services/user';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
  ) { }

  registerUser(email:string, password:string): Promise<any>{
    return this.afa.createUserWithEmailAndPassword(email,password);
  }
  loginUser(email:string, password:string): Promise<any>{
    return this.afa.signInWithEmailAndPassword(email,password);
  }
  logoutUser(): Promise<void>{
    return this.afa.signOut();
  }

}
