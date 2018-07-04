import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any;

  // Subject Observable for score
  public subject = new Subject();

  constructor(private firebase: AngularFireDatabase) {
   
  }

  // Get logged in user details
  getUser(uid: string) {
    let ref = this.firebase.list('users');
    ref.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        if (element.key === uid) {
          this.user = element.payload.toJSON();
          this.user.key = element.key;
          return;
        }
      })
    });
  }

  // Return user object
  getUserObj() {
    return this.user;
  }

  //TODO: create new user
  insertUser(user: User) {

  }

  // Update the user object -> Game score
  updateUser(score: number) {
    let ref = this.firebase.list('users');
    ref.update(this.user.key, {
      email: this.user.email,
      name: this.user.name,
      score: this.user.score + score
    });

    this.subject.next(score)
  }

}
