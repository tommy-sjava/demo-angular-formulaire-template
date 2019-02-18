import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  likeActif = true;
  unLikeActif = true;


  constructor(private _serv: DataService) {

  }

  ngOnInit() {
    this.gererActivationBoutons();
  }

  onVoted(avis: Avis) {

    this._serv.donnerUnAvis(this.collegue, avis);
    this.gererActivationBoutons();
  }

  gererActivationBoutons() {
    this.likeActif = this.collegue.score < 10;
    this.unLikeActif = this.collegue.score > -10;
  }



}
