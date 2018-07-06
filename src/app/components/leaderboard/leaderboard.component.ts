import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/data/user/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  // Observer
  public scores = new Array();

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Get scores via service
    this.userService.getUsersScores();
    var temp = new Array();

    this.userService.scoreSubject.subscribe(
      (scores: any) => {
        if (scores) {
          this.scores = scores;
        };
      });
  }
}