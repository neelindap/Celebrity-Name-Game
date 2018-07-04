import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { forEach } from '@typed/hashmap';
import { of } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public correctAnswers: any;

  // Observed variables
  private answers;
  private score;

  // Firebase variables
  private ref;
  private subscription;

  constructor(private firebase: AngularFireDatabase,
    private userService: UserService) {
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
    this.answers = new Array();
    this.score = 0;

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
              this.answers.push(i + ":" + '');
              i++;
            }

            // Increment score of correct answers
            if (this.correctAnswers.ans[index] == value) {
              this.score++;
            }

            // Add correct/wrong answer for cast index
            this.answers.push(key + ":" + (this.correctAnswers.ans[index] == value));
            i++;
          }, selectedAnswers);

          // Update score in db
          this.userService.updateUser(this.score);
        }
      });
    });
  }

  getFinalAnswers() {
    return of(this.answers);
  }

  unsubscriveFromObject() {
    // Unsubscribe on game end
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
