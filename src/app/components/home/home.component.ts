import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MovieService } from '../../services/data/movie/movie.service';
import { CastService } from '../../services/data/cast/cast.service';
import { ToastrService } from 'ngx-toastr';

import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movieForm: FormGroup;
  private movies: any[];
  private moviesPresent: boolean = false;

  private cast: String[] = new Array();
  private castNames: String[] = new Array();
  private castPresent: boolean = false;
  private castLoading: boolean = false;

  private counter: number = 0;

  constructor(private fb: FormBuilder,
    private movieService: MovieService,
    private castService: CastService,
    private toastr: ToastrService) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  searchMovie() {
    const movieTitle = this.movieForm.value.title;
    if (movieTitle.length >= 3) {
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
    } else {
      this.moviesPresent = false;
      this.castPresent = false;
    }
  }

  gameStarted(title: string) {
    // console.log('gameStarted '+title);
    this.movieForm.get('title').setValue(title);
    this.moviesPresent = false;
  }

  // GET MOVIE CAST
  findCast(movieId: string) {
    // Reset variables
    this.cast = new Array();
    this.castNames = new Array();
    this.counter = 0;

    this.castLoading = true;
    this.castService.searchCast(movieId).subscribe(
      (casts: any) => {
        for (let i in casts.cast) {
          let e = casts.cast[i];
          if (e.profile_path != null) {
            this.cast.push(e);

            let json: any = {
              "id": e.id,
              "name": e.name,
              "character": e.character
            };

            // TODO : shuffle list
            this.castNames.push(json);
            this.counter++;
          }
          if (this.counter == 5)
            break;
          this.castPresent = true;
        }
        this.castLoading = false;

        this.castNames = this.shuffle(this.castNames);
      },
      (error: any) => {
        this.castPresent = false;
        this.castLoading = false;
        this.toastr.error(`No cast inforrmation present for the movie ${this.movieForm.value.title} exists in the database. Please try another movie.`, 'No cast present', {
          timeOut: 3000,
        });
      });
  }

  // Shuffle array
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  submitAnswers(){
    console.log('submit');
  }
}
