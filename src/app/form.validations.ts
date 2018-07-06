import { AbstractControl } from '@angular/forms';

export function MatchPasswords(control: AbstractControl) {
    if (control.parent) {
        var pwdControl : any = control.parent.controls;
        var password = pwdControl.password.value;
    }
    if ( password !== control.value) {
        return { passwordNotMatch: true };
    }
    return null;
}