import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private auth: AuthService) {
    this.regForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit() {
  }


  registerInWithEmail(): void {
    const email = this.regForm.value.email;
    const password = this.regForm.value.password;

    this.auth.signUpWithEmail(email, password);
  }


  formErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email'
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    }
  };

}
