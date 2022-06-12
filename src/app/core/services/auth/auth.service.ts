import { Injectable, NgZone } from '@angular/core';
// import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

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
