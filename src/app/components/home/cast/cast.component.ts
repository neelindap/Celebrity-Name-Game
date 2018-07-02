import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  @Input() cast: any;

  private IMAGE_BASE: String = "https://image.tmdb.org/t/p/w154";
  private image: String;

  constructor() { }

  ngOnInit() {
    this.image = this.IMAGE_BASE + this.cast.profile_path;
  }

}
