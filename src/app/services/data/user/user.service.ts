import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any;

  constructor(private firebase: AngularFireDatabase) { }

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

  getUserObj() {
    return this.user;
  }

  //TODO: create new user
  insertUser(user: User) {

  }

  
}
