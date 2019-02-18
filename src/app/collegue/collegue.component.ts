import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  likeActif = true;
  unLikeActif = true;

  constructor() { }

  ngOnInit() {
    this.gererActivationBoutons();
  }

  onVoted(avis: Avis) {
    if (avis === Avis.AIMER) {
      this.collegue.score++;
    } else if (avis === Avis.DETESTER) {
      this.collegue.score--;
    }

    this.gererActivationBoutons();
  }

  gererActivationBoutons() {
    this.likeActif = this.collegue.score < 10;
    this.unLikeActif = this.collegue.score > -10;
  }



}
