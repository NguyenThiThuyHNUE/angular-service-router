import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() starRating: number;
  star: number;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.star = this.starRating * 75 / 5 ;
  }

}
