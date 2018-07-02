import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MovieService } from '../../services/data/movie/movie.service';
import { CastService } from '../../services/data/cast/cast.service';
import { ToastrService } from 'ngx-toastr';

import { Movie } from '../../models/movie.model';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movieForm: FormGroup;
  private movies: any[];
  private moviesPresent: boolean = false;

  private cast: String[];
  private castPresent: boolean = false;
  private castLoading: boolean = false;

  private started: boolean = false;

  constructor(private fb: FormBuilder,
    private movieService: MovieService,
    private castService: CastService,
    private toastr: ToastrService) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required]
    })
  }

  ngOnInit() {
    $(document).on("click", ".start", (() => {
      this.started = !this.started;
      console.log('clicked');
      $("[id^=name_]").draggable();
      $('[id^=pic_]').droppable({
        drop: function (event, ui){
          $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
        }
      });
    }));
   
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
    this.castLoading = true;
    this.castService.searchCast(movieId).subscribe(
      (casts: any) => {
        // TODO : Check if image is null -> dont add
        this.cast = casts.cast.splice(0, 5);
        this.castPresent = true;
        this.castLoading = false;
      },
      (error: any) => {
        this.castPresent = false;
        this.castLoading = false;
        this.toastr.error(`No cast inforrmation present for the movie ${this.movieForm.value.title} exists in the database. Please try another movie.`, 'No cast present', {
          timeOut: 3000,
        });
      });
  }

  setDroppable(){
   
    // $(document).on("click", "[id^=name_]", function (event) {
      
    //   $(this).draggable();
     
    // });
  }
  
}
