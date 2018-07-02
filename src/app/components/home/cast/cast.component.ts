import { Component, OnInit, Input } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  @Input() cast: any;
  @Input() castNames: any;
  @Input() index:any;

  private IMAGE_BASE: String = "https://image.tmdb.org/t/p/w154";
  private image: String;

  private selectedIndex: number = null;

  constructor() { }

  ngOnInit() {
    this.image = this.IMAGE_BASE + this.cast.profile_path;
  }

  selectedCast(event: any, index: number){
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;

    this.setIndex(index);

    let selected = value.split(":");
  }

  setIndex(index: number){
    this.selectedIndex = index;
  }
}

