import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { User } from '../../../models/user.model';
import { of } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../../environments/environment';

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;

  let service: AuthService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, FormsModule, AngularFireModule.initializeApp(environment),
        AngularFireDatabaseModule],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit(); 
    
    de = fixture.debugElement;

    service = de.injector.get(AuthService);

    spy = spyOn(service, 'signInRegular').and.returnValue(of(new User()));
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should return a logged in user', () => {
    expect(component.loginForm.valid).toBeFalsy();

  });
});
