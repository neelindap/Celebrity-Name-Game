import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { forEach } from '@typed/hashmap';
import { Subject } from 'rxjs';
import { UserService } from '../user/user.service';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public correctAnswers: any;

  // Subject Observale for answers
  public subject = new Subject();

  // Firebase variables
  private ref;
  private subscription;

  constructor(private firebase: AngularFireDatabase,
    private userService: UserService,
    private authService: AuthService) {
    // Ref to firebase db -> games
    this.ref = this.firebase.list('games');
  }

  gameEntry(game: any) {
    let ans = new Array();

    game.forEach(i => {
      ans.push(i.id + ":" + i.name);
    })

    // Save correct answers for game
    let key = this.ref.push({ ans }).key;
    return key;
  }

  getCorrectAnswers(key: string, selectedAnswers: any) {
    // Initialize variables
    let answers = new Array();
    let score = 0;

    this.subscription = this.ref.snapshotChanges().subscribe(item => {
      item.forEach(element => {

        // Get correct game and check correct answers against submitted
        if (element.key === key) {
          this.correctAnswers = element.payload.toJSON();
          let i = 0;

          // Traverse through answered map and check if correct or not
          forEach((value, key) => {
            let index = (key as number);
            // console.log(index, i);

            // Add blank entries for unanswered questions
            while (index != i) {
              answers.push(i + ":" + '');
              i++;
            }

            // Increment score of correct answers
            if (this.correctAnswers.ans[index] == value) {
              score++;
            }

            // Add correct/wrong answer for cast index
            answers.push(key + ":" + (this.correctAnswers.ans[index] == value));
            i++;
          }, selectedAnswers);

          this.userService.updateUser(score,
            this.authService.userDetails.isAnonymous);

          // console.log(answers);
          // Emit answers object to subscribers
          this.subject.next(answers);
        }
      });
    });
  }

  unsubscriveFromObject() {
    // Unsubscribe on game end
    if (this.subscription)
      this.subscription.complete();
  }
}
