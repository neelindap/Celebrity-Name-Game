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

}
