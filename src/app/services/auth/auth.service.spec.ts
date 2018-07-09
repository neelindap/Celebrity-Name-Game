import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../data/user/user.service';

xdescribe('AuthService', () => {

  let service: AuthService;
  let _firebaseAuth: AngularFireAuth;
  let router: Router;
  let toastr: ToastrService;
  let userService: UserService;

  beforeEach(() => {
    service = null;
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  // it('should be created', inject([AuthService], (service: AuthService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should test for anonyomous users', () => {
    spyOn(service, 'signInAnon').and.returnValue(true);
    expect(service.signInAnon).toBeTruthy();

    spyOn(service, 'signInAnon').and.returnValue(false);
    expect(service.signInAnon).toBeFalsy();
  });
});
