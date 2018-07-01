import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movieForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.movieForm = this.fb.group({
      title:['', Validators.required]
    })
  }

  ngOnInit() {
  }

  searchMovie(){
    const movieTitle = this.movieForm.value.title;
    console.log(movieTitle);
  }
}
