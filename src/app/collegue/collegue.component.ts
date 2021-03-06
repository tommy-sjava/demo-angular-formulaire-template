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
    if (JSON.parse(localStorage.getItem(`${this.collegue.pseudo}`))) {
      this.collegue = JSON.parse(localStorage.getItem(`${this.collegue.pseudo}`))
    };
  }

  onVoted(avis: Avis) {

    this._serv.donnerUnAvis(this.collegue, avis).subscribe(
      value => { this.collegue = value, this.gererActivationBoutons() }

    );


  }

  gererActivationBoutons() {
    this.likeActif = this.collegue.score < 95;
    this.unLikeActif = this.collegue.score > -100;
  }



}
