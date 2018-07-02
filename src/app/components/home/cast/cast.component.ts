import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  @Input() cast: any;
  @Input() castNames: any;
  @Input() index:any;
  @Output() addToMap = new EventEmitter<string>();

  private IMAGE_BASE: String = "https://image.tmdb.org/t/p/w154";
  private image: String;

  private selectedIndex: number = null;

  constructor() { }

  ngOnInit() {
    this.image = this.IMAGE_BASE + this.cast.profile_path;
    // console.log('init '+this.selectedAnswers);
  }

  // Cast member selected
  selectedCast(event: any, index: number){
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;

    this.setIndex(index);
    this.addToMap.emit(value);
  }

  // Set index of selected element
  setIndex(index: number){
    this.selectedIndex = index;
  }


}

