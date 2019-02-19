import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Vote } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  listeVotes: Vote[] = [];

  constructor(private _srv: DataService) { }

  ngOnInit() {
    this._srv.voteSupprimerObs.subscribe(value => this.listeVotes.push(value));
  }


  SupprimerVote(nb: number) {
    if (nb === 0) {
      this.listeVotes.splice(0, 1)
    }
    else {
      this.listeVotes.splice(nb, 1)
    }
  }
}
