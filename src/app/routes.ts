import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';

// import { AuthGuard } from './auth/auth.guard';

import { RegisterComponent } from './landing/register/register.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/login/login.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
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