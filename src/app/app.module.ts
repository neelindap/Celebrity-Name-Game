// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Services
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth-guard.service';
import { MovieService } from './services/data/movie/movie.service';
import { UserService } from './services/data/user/user.service';

import { environment } from './../environments/environment';
import { appRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';

// Components
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/landing/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/landing/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieComponent } from './components/home/movie/movie.component';
import { CastComponent } from './components/home/cast/cast.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    MovieComponent,
    CastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService, 
    AuthGuard, 
    MovieService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
