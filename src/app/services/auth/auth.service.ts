import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, 
    private router: Router,
    private toastr: ToastrService) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  signInRegular(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  signUpWithEmail(email: string, password: string): Promise<void> {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['/login']);
        this.toastr.success('You\'ve successfully registered. Please log in to continue', 'Success', {
          timeOut: 3000,
        });
      })
      .catch((error) => {
        // console.log(error)
        this.toastr.error('There was an error during registration. Please try again', 'Error', {
          timeOut: 3000,
        });
      });
  }


  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}