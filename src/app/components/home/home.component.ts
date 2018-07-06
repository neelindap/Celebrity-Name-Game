import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MovieService } from '../../services/data/movie/movie.service';
import { CastService } from '../../services/data/cast/cast.service';
import { GameService } from '../../services/data/game/game.service';
import { ToastrService } from 'ngx-toastr';

import { empty, size, set } from '@typed/hashmap';
import { UserService } from '../../services/data/user/user.service';

// import fade in animation
import { fadeInAnimation } from '../../animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  // Movies
  public movieForm: FormGroup;
  private movies: any[];
  public moviesPresent: boolean = false;
  public noMovies: boolean = false;

  // Cast
  private cast: String[] = new Array();
  private castNames: String[] = new Array();
  public castPresent: boolean = false;
  public castLoading: boolean = false;
  private counter: number = 0;
  public noCast: boolean = false;

  // Submitted Answers
  private selectedAnswers = empty<number, string>();
  private key: string;

  // Correct Answers
  private answered: boolean = false;
  private answers: any[];
  private score: any;

  constructor(private fb: FormBuilder,
    private movieService: MovieService,
    private castService: CastService,
    private gameService: GameService,
    private userService: UserService,
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

    // Reset answered status
    this.answered = false;
    this.answers = [];
    this.castPresent = false;
    this.selectedAnswers = empty<number, string>();
    this.noMovies = false;
    this.noCast = false;

    const movieTitle = this.movieForm.value.title;
    if (movieTitle.length >= 3) {
      this.movieService.searchMovie(movieTitle).subscribe(
        (movies: any) => {
          if (movies.total_results == 0) {
            this.noMovies = true;
            this.moviesPresent = false;
            return;
          }
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
    this.movieForm.get('title').setValue(title);
    this.moviesPresent = false;

    // Unsubscribe from game service
    this.gameService.unsubscriveFromObject();
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
        // Less than 5 cast member info -> return
        if (casts.cast.length < 5) {
          this.castLoading = false;
          this.noCast = true;
          return;
        }

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
        this.noCast = false;

        // if (this.counter < 5) {
        //   this.noCast = true;
        //   this.castPresent = false;
        //   this.cast = new Array();
        //   this.counter = 0;
        //   return;
        // }
        // store in DB -> Get stored item key
        this.key = this.gameService.gameEntry(this.cast);

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
  submitAnswers(key: string) {
    //Check if all answers are submitted. If not confirm box
    let submitted = size(this.selectedAnswers);

    // Uncomment later
    // if (submitted < 5) {

    //   // Alert confirm box
    //   if (!window.confirm("You haven't selected all answers! Are you sure you want to submit your answers?")) {
    //     return;
    //   }
    // }

    // get correct answers
    this.gameService.getCorrectAnswers(key, this.selectedAnswers);

    // Subscribe to answers
    var answersObserver = this.gameService.subject.subscribe(
      (data: any[]) => {
        this.answers = data;
      }
    )

    // subscribe to score
    var scoreObserver = this.userService.subject.subscribe(
      (data) => {
        this.score = data;
      });

    this.answered = true;
  }

}
