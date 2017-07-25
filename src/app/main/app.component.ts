import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Sets the title which is shown in the navigation bar
   * @type {string}
   */
  title = 'League Champions';
}
