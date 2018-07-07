import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MovieComponent } from './movie/movie.component';
import { CastComponent } from './cast/cast.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../routes';
import { LandingComponent } from '../landing/landing.component';
import { RegisterComponent } from '../landing/register/register.component';
import { LoginComponent } from '../landing/login/login.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { ErrorComponent } from '../error/error.component';
import { TableComponent } from '../leaderboard/table/table.component';
import { ChartComponent } from '@swimlane/ngx-charts';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let service: AuthService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [HomeComponent,
        MovieComponent,
        CastComponent,
        LandingComponent,
        RegisterComponent,
        LoginComponent,
        LeaderboardComponent,
        ErrorComponent,
        TableComponent,
        ChartComponent],
      providers: [
        AuthService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spy = spyOn(service, 'signInRegular')
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
