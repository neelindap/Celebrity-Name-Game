import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})

export class MovieComponent implements OnInit {

  // Actor image
  // https://image.tmdb.org/t/p/w500/eIkFHNlfretLS1spAcIoihKUS62.jpg

  @Input() movie: any;
  @Output() gameStarted = new EventEmitter<string>();
  @Output() findCast = new EventEmitter<string>();

  private IMAGE_BASE: String = "https://image.tmdb.org/t/p/w154";
  public image: String;
  

  constructor() {
  }

  ngOnInit() {
    // Placeholder for no poster
    if(this.movie.poster_path == null)
      this.image = 'assets/img/poster-placeholder.jpg';
    else
      this.image = this.IMAGE_BASE + this.movie.poster_path;
  }

  playGame() {
    // Update movie title in search box
    this.gameStarted.emit(this.movie.title);

    // Get Cast
    const movieId = this.movie.id;
    this.findCast.emit(movieId);
  }

}
