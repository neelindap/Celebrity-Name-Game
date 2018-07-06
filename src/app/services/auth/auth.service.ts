import { Injectable, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../data/user/user.service';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  // Subject Observale for answers
  public subject = new Subject();

  private loggedOut = false;

  private unsubscribe;

  constructor(private _firebaseAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService) {
    this.user = _firebaseAuth.authState;
    this.unsubscribe = this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.userService.getUser(this.userDetails.uid);
          if (user.isAnonymous) {
            this.toastr.success('Guest session created! Be sure to end the session.', 'Success', {
              timeOut: 3000,
            });
          } else {
            this.toastr.success('You\'re logged in!', 'Success', {
              timeOut: 3000,
            });
          }
          this.router.navigateByUrl('/home');
        }
        else {
          if (this.loggedOut) {
            this.toastr.success('You\'ve successfully logged out.', 'Success', {
              timeOut: 3000,
            });
          }
          else {
            this.toastr.error('You\'re not logged in!', 'Error', {
              timeOut: 3000,
            });
          }
          this.userDetails = null;
        }
      }
    );
  }

  signInRegular(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  signUpWithEmail(email: string, password: string, name: string): Promise<void> {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Store user in db
        this.userService.insertUser(user, name)
        this.userDetails = user;
        this.router.navigate(['/home']);
        this.toastr.success('You\'ve successfully registered!', 'Success', {
          timeOut: 3000,
        });
      })

      .catch((error) => {
        // Catch email already existing errors
        if (error.code == 'auth/email-already-in-use') {
          this.toastr.error('The email-id already already exists in the database', 'Error', {
            timeOut: 3000,
          });
        }
        // Catch all error 
        else {
          this.toastr.error('There was an error during registration. Please try again', 'Error', {
            timeOut: 3000,
          });
        }
      });
  }

  signInAnon() {
    this._firebaseAuth.auth.signInAnonymously();
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.loggedOut = true;
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  ngOnDestroy(){
    this.unsubscribe();
  }
}