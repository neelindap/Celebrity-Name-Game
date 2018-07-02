import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }
    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.toastr.error('You\'re not logged in', 'Error', {
            timeOut: 3000,
        });
        this.router.navigate(['/']);
        return false;
    }
}