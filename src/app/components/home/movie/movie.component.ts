import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

  // Actor image
  // https://image.tmdb.org/t/p/w500/eIkFHNlfretLS1spAcIoihKUS62.jpg

  @Input() movie: any;
  @Output() gameStarted = new EventEmitter<string>();

  private IMAGE_BASE: String = "https://image.tmdb.org/t/p/w154";
  private image: String;

  constructor() {
  }

  ngOnInit() {
    this.image = this.IMAGE_BASE + this.movie.poster_path;
  }

  playGame() {
    this.gameStarted.emit(this.movie.title);
    const movieId = this.movie.id;

    // GET MOVIE CAST
  }

}
