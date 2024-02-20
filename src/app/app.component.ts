import { Component, OnInit } from '@angular/core';

import { MediaOfTheDay } from './media-of-the-day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  medias: MediaOfTheDay[] = [];
  days: number = 7;

  constructor() {}

  get startDate(): Date {
    return new Date(this.endDate.getTime() - (this.days * 1000 * 60 * 60 * 24));
  }

  get endDate(): Date {
    return new Date();
  }

  ngOnInit(): void {
    this.onDaysUpdate();
  }

  // TODO: whenever `days` changes, fetch the correct medias for the past `days` days and display them
  onDaysUpdate(): void {
  }
}
