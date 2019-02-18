import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collegueTest: Collegue = {
    pseudo: 'Aria',
    score: 0,
    photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/7/113250.jpg'
  }
}

