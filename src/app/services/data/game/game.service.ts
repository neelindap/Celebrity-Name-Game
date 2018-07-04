import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { forEach } from '@typed/hashmap';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private correctAnswers: any;

  // Observed variables
  private answers;
  private score;

  constructor(private firebase: AngularFireDatabase) { }

  gameEntry(game: any) {
    let ref = this.firebase.list('games');
    let ans = new Array();

    game.forEach(i => {
      ans.push(i.id + ":" + i.name);
    })

    let key = ref.push({ ans }).key;
    return key;
  }

  getCorrectAnswers(key: string, selectedAnswers: any) {
    // Initialize variables
    this.answers = new Array();
    this.score = 0;

    let ref = this.firebase.list('games');
    ref.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        if (element.key === key) {
          this.correctAnswers = element.payload.toJSON();

          forEach((value, key) => {
            let index = (key as string);
            if (this.correctAnswers.ans[index] == value) {
              this.score++;
              // console.log(this.score);
            }
            this.answers.push(key + ":" + (this.correctAnswers.ans[index] == value))
          }, selectedAnswers);

          // this.answers.push(correct+":''");

          console.log(this.answers, this.score);
          // this.answers;
          // return score;
        }
      });
    });
    // TODO: add score to db
    console.log('aa '+this.score);
  }

  getFinalAnswers() {
    return of(this.answers);
    // return this.getCorrectAnswers().subscribe(data => console.log('aa '+data)) ;
  }

  getFinalScore() {
    return of(this.score);
  }
}
