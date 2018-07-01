import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../../services/data/movie/movie.service';
import { Movie } from '../../models/movie.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movieForm: FormGroup;
  private movies: any[];
  private moviesPresent: boolean = false;

  constructor(private fb: FormBuilder,
    private movieService: MovieService,
    private toastr: ToastrService) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  searchMovie() {
    const movieTitle = this.movieForm.value.title;
    this.movieService.searchMovie(movieTitle).subscribe(
      (movies: any) => {
        this.movies = movies.results;
        this.moviesPresent = true;
      },
      (error: any) => {
        this.moviesPresent = false;
        this.toastr.error(`No movie by the name ${movieTitle} exists in the database`, 'Invalid movie title', {
          timeOut: 3000,
        });
      });

  }
}
