import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../data/user/user.service';
import { User } from '../../models/user.model';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  // Subject Observale for answers
  public subject = new Subject();

  constructor(private _firebaseAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.userService.getUser(this.userDetails.uid)
          this.router.navigateByUrl('/home');
        }
        else {
          this.toastr.error('You\'re not logged in', 'Error', {
            timeOut: 3000,
          });
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


  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  // getUserObj() {
  //   let user = new User();
  //   if (this.userDetails) {
  //     let userCast = this.userDetails as any;
  //     user.uid = userCast.uid;
  //     user.name = userCast.name;
  //     user.email = userCast.email;
  //     user.score = userCast.score;
  //   }
  //   return user;
  // }

  // getUid(){
  //   if(this.userDetails != null)
  //     return this.userDetails.uid;
  // }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}