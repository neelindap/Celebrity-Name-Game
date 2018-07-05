import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../../models/user.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

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

    this.getUsersScores();
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
  updateUser(score: number) {
    this.ref.update(this.user.key$, {
      email: this.user.email,
      name: this.user.name,
      score: this.user.score + score,
      uid: this.user.uid
    });
    this.subject.next(score);
  }

  // Leaderboard
  getUsersScores() {
    // var items = this.ref.snapshotChanges().pipe(
    //   map((item:any) => {
    //     console.log(item);
    //     item.sort((a, b) => {return a.score - b.score})
    //   })
    // );
    // }

    var score = new Array();
    var items = this.firebase.list('users', (re: any) => {
      // query: {
      //   orderByChild: 'score'
      // }
      let q = re.orderByChild('score');
      console.log(q);
      return q;
    });

    items.snapshotChanges().subscribe(item => {
      console.log(item);
      this.scoreSubject.next(item);
      // item.forEach(element => {
        
      //   if (element) {
      //     // let user = element.payload.toJSON() as any;
      //     // let json = {
      //     //   name: user.name,
      //     //   score: user.score
      //     // }
      //     // score.push(json);
      //     this.scoreSubject.next(element.payload.toJSON());
      //     console.log(element.payload.toJSON())
      //   }
      // })
    });

    

    // var a = score.reverse();
    // console.log(score[0]);
  }

}
