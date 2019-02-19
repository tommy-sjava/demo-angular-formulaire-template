import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vote-count',
  templateUrl: './vote-count.component.html',
  styleUrls: ['./vote-count.component.css']
})
export class VoteCountComponent implements OnInit {

  compteur: number = 0;

  constructor(private _srv: DataService) { }

  ngOnInit() {
    this._srv.voteSupprimerObs.subscribe(
      () => localStorage.setItem('cpt', JSON.stringify(++this.compteur))
    );
    if (JSON.parse(localStorage.getItem('cpt'))) {
      this.compteur = JSON.parse(localStorage.getItem('cpt'))
    };
  }

}
