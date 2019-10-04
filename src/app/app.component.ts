import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'differential-loading-ie11-issue';
  constructor() {
    console.log('Some text'.padStart(20));
    console.log([1, 2, 3, 4].flatMap(x => [x * 2]));
  }
}
