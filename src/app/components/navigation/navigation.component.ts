import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/data/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  private user: User;
  private userObserver;

  constructor(public authService: AuthService,
    private userService: UserService) {

  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // subscribe to score
    this.user = new User();
    this.userObserver = this.userService.userSubject.subscribe(
      (userCast: any) => {
        if (userCast != undefined) {
          this.user.uid = userCast.uid;
          this.user.name = userCast.name;
          this.user.email = userCast.email;
          this.user.score = userCast.score;
        }
      });
  }

  ngOnDestroy(){
    this.userService.userSubject.unsubscribe();
  }

}
