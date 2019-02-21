import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  collegues: Collegue[];


  constructor(private _serv: DataService) { }

  ngOnInit() {
    this._serv.listerCollegues().subscribe(
      value => this.collegues = value,

    );
  }

  refresh() {
    this._serv.listerCollegues().subscribe(
      value => this.collegues = value,

    );
  }

}
