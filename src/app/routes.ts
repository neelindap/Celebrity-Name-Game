import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './services/auth/auth-guard.service';

import { RegisterComponent } from './components/landing/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';

export const appRoutes: Routes = [
    {   
        path: 'home', 
        component: HomeComponent ,
        // canActivate: [AuthGuard]
    },
    {
        path: 'register', component: LandingComponent,
        children: [{ path: '', component: RegisterComponent }]
    },
    {
        path: 'login', component: LandingComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];