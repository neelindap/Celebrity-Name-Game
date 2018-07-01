import { Component, OnInit, Input } from '@angular/core';
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
  private IMAGE_BASE: String = "https://image.tmdb.org/t/p/w500";
  private image: String;

  constructor() { 
  }

  ngOnInit() {
    this.image = this.IMAGE_BASE + this.movie.poster_path;
  }

}
