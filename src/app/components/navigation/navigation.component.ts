import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/data/user/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  private user: User;
  
  constructor(private auth: AuthService,
    private userService: UserService) {

  }

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
    // console.log('aaa '+this.userService.getUser());
    // this.user = this.userService.getUser();
  }

  getUserC() {
    // console.log(this.userService.getUser());
    this.user = this.userService.getUserName();
    if(this.user)
      return this.user.name;
  }

}
