import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private authService: AuthService, 
              private router: Router) {
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  ngOnInit() {
  }

  // TODO : Validations
  signInWithEmail() {
    this.authService.signInRegular(this.loginForm.value.email, this.loginForm.value.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['home']);
      })
      .catch((err) => console.log('error: ' + err));
  }

}
