import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  // Firebase variables
  private ref;

  // Subject Observable for score
  public subject = new Subject();
  public userSubject = new Subject();
  public scoreSubject = new Subject();

  constructor(private firebase: AngularFireDatabase) {
    // Ref to firebase db -> users
    this.ref = this.firebase.list('users');
  }

  // Get logged in user details (not used)
  getUser(uid: string) {
    // this.ref = this.firebase.list('users');
    this.ref.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        if (element) {
          if (element.payload.toJSON().uid === uid) {
            this.user = element.payload.toJSON();
            this.user.key$ = element.key;
            this.userSubject.next(this.user);
            return;
          }
        }
      })
    });
  }

  //Create new user
  insertUser(user: any, displayname: string) {
    this.ref.push({
      uid: user.uid,
      email: user.email,
      name: displayname,
      score: 0
    });
  }

  // Update the user object -> Game score
  updateUser(score: number, isAnon: boolean) {

    // Update score in db if user isn't anonymous
    if (!isAnon) {
      this.ref.update(this.user.key$, {
        email: this.user.email,
        name: this.user.name,
        score: this.user.score + score,
        uid: this.user.uid
      });
    }
    this.subject.next(score);
  }

  // Leaderboard
  getUsersScores() {
    var score = new Array();
    var items = this.firebase.list('users', (re: any) => {
      let q = re.orderByChild('score');
      return q;
    });

    items.snapshotChanges().subscribe(item => {
      // console.log(item);
      item.forEach(element => {

        if (element) {
          let user = element.payload.toJSON() as any;
          let json = {
            name: user.name,
            value: user.score
          }
          score.push(json);
        }
      });

      // Reverse array as Firebase doesn't provide descending sorting order
      score = score.reverse();

      // Get top 5 users
      this.scoreSubject.next(score.splice(0,5));
    });
  }

}
