import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  constructor() { }
  @Input() backgroundColor = '#d9d9d9';
  @Input() proressColor = '#4CAF50';
  @Input() width = 50;
  ngOnInit() {
  }

}
