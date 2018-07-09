import { TestBed, inject, async } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { appRoutes } from '../../routes';

describe('AuthGuardService', () => {
  let router: Router;
  const routerSpy = {
    navigate: jasmine.createSpy('navigate')
  }
  let guardService: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, { provide: Router, useValue: routerSpy }],
      imports: [RouterTestingModule.withRoutes(appRoutes)]
    });
  });

  it('should return true for authenticated user', () => {

    // create `isLoggedIn` spy on an object representing the AuthService
    const authServiceSpy =
      jasmine.createSpyObj('AuthService', ['isLoggedIn']);

    // set the value to return when the `isLoggedIn` spy is called.
    authServiceSpy.isLoggedIn.and.returnValue(true);

    guardService = new AuthGuardService(router, authServiceSpy);
    expect(guardService.canActivate()).toBeTruthy();
  });

  it('should return false for unauthenticated user', () => {
    async(inject([AuthGuardService, Router], (auth, router) => {

      // add a spy
      spyOn(router, 'navigate');

      expect(auth.canActivate()).toBeFalsy();
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    })
    )
  });
});