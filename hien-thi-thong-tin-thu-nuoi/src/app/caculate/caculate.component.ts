import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculate',
  templateUrl: './caculate.component.html',
  styleUrls: ['./caculate.component.css']
})
export class CaculateComponent implements OnInit {
  output: number;
  first: number;
  second: number;
  operator: string;
  onFirstChange(value) {
    this.first = Number(value);
  }
  onSecondChange(value) {
    this.second = Number(value);
  }
  onSelectChange(value) {
    this.operator = value;
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
