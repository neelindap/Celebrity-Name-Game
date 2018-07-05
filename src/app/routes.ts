import { Routes } from '@angular/router'

import { AuthGuardService } from './services/auth/auth-guard.service';

import { RegisterComponent } from './components/landing/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ErrorComponent } from './components/error/error.component';

export const appRoutes: Routes = [
    { path : '', redirectTo:'/login', pathMatch : 'full'},
    {   
        path: 'home', 
        component: HomeComponent ,
        canActivate: [AuthGuardService]
    },
    {
        path: 'register', component: LandingComponent,
        children: [{ path: '', component: RegisterComponent }]
    },
    {
        path: 'login', component: LandingComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    {
        path: 'leaderboard', 
        component: LeaderboardComponent,
        canActivate: [AuthGuardService]
    },
    // Handling invalid pages
    {
        path: 'notFound', 
        component: ErrorComponent
    },
    {path: '**', redirectTo: '/notFound'}
];