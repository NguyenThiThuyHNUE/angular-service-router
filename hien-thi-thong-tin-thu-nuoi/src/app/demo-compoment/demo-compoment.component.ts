import { Component, OnInit } from '@angular/core';
import {IUser} from './IUser';

@Component({
  selector: 'app-demo-compoment',
  templateUrl: './demo-compoment.component.html',
  styleUrls: ['./demo-compoment.component.css']
})
export class DemoCompomentComponent implements OnInit {
  users: IUser[] = [
    {
      id: 1,
      name: 'Thuy',
      email: 'thuy@gmail.com',
      image: 'anh',
      starRating: 2
    },
    {
      id: 2,
      name: 'Thanh',
      email: 'thanh@gmail.com',
      image: 'anh',
      starRating: 4
    },
    {
      id: 3,
      name: 'Lan',
      email: 'lan@gmail.com',
      image: 'anh',
      starRating: 1
    },
    {
      id: 4,
      name: 'Nam',
      email: 'nam@gmail.com',
      image: 'anh',
      starRating: 3
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
