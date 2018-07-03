import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any;

  constructor(private firebase: AngularFireDatabase) { }

  getUser(uid: string){
    let ref = this.firebase.list('users');
    ref.snapshotChanges().subscribe( item => {
      // console.log(item)
      item.forEach(element => {
        // console.log(element.key)
        if(element.key === uid){
          this.user = element.payload.toJSON();
          // console.log(this.user)
          return;
        }
      })
    });
  }

  getUserName(){
    // console.log('called '+this.user);
    return this.user;
  }

  insertUser(user: User){

  } 
}
