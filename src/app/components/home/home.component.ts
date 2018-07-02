import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MovieService } from '../../services/data/movie/movie.service';
import { CastService } from '../../services/data/cast/cast.service';
import { ToastrService } from 'ngx-toastr';

import { Movie } from '../../models/movie.model';
import { empty, size, set } from '@typed/hashmap';

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

  private selectedAnswers = empty<number, string>();

  constructor(private fb: FormBuilder,
    private movieService: MovieService,
    private castService: CastService,
    private toastr: ToastrService) {

    // Initialize form
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  // Get movie details on Keyup
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

  // Trigger game start after movie selection -> Hide the autocomplete box and update textbox
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
            this.castNames.push(json);
            this.counter++;
          }
          if (this.counter == 5)
            break;
          this.castPresent = true;
        }
        this.castLoading = false;

        // TODO : store in DB

        // Shuffle list
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

  // Add to answers map
  addToMap(value: any) {
    let selected = value.split(":");

    let id = selected[0];
    let cast_id = selected[1];
    let cast_name = selected[2];

    // Add to map
    this.selectedAnswers = set(id, cast_id + ":" + cast_name, this.selectedAnswers);
  }

  // Submit answers
  submitAnswers() {
    //Check if all answers are submitted. If not confirm box
    let submitted = size(this.selectedAnswers);
    if (submitted < 5) {

      // Alert confirm box
      if (!window.confirm("You haven't selected all answers! Are you sure you want to submit your answers?")) {
        return;
      }
    }

    // Submit answers
    console.log('continue');
  }

}
