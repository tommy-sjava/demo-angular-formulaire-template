import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Observable, of, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {


  /*
    collegueTest: Collegue = {
      pseudo: 'Aria',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/7/113250.jpg'
    }
  
    collegueTest2: Collegue = {
      pseudo: 'Tanya',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/11/319996.jpg'
    }
  
    collegueTest3: Collegue = {
      pseudo: 'Minami',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/9/82468.jpg'
    }
  
    collegueTest4: Collegue = {
      pseudo: 'Yuuki',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/4/278171.jpg'
    }
  
    collegueTest5: Collegue = {
      pseudo: 'Tatsumaki',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/16/296299.jpg'
    }
    collegueTest6: Collegue = {
      pseudo: 'Jeanne',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/2/148927.jpg'
    }
    collegueTest7: Collegue = {
      pseudo: 'Reki',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/6/148931.jpg'
    }
    collegueTest8: Collegue = {
      pseudo: 'Rukia',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/2/78215.jpg'
    }
    collegueTest9: Collegue = {
      pseudo: 'Sarada',
      score: 0,
      photoUrl: 'https://myanimelist.cdn-dena.com/images/characters/5/292448.jpg'
    }
  */
  collegues: Collegue[]/* = [this.collegueTest, this.collegueTest2, this.collegueTest3, this.collegueTest4, this.collegueTest5, this.collegueTest6, this.collegueTest7, this.collegueTest8, this.collegueTest9];*/

  // TODO alimenter la liste de votes
  // Référencer un objet Collegue comme suit : `this.listeCollegues[0]`
  /*listeVotes: Vote[] = [
    {
      collegue: this.collegues[0],
      avis: Avis.AIMER
    },
    {
      collegue: this.collegues[1],
      avis: Avis.DETESTER
    },
    {
      collegue: this.collegues[2],
      avis: Avis.AIMER
    },
    {
      collegue: this.collegues[4],
      avis: Avis.AIMER
    },
    {
      collegue: this.collegues[8],
      avis: Avis.AIMER
    }
    ,
    {
      collegue: this.collegues[5],
      avis: Avis.AIMER
    }
    ,
    {
      collegue: this.collegues[2],
      avis: Avis.AIMER
    }
  ]*/
  //listeVotes: Vote[] = []

  private voteSupprimeSub = new Subject<Vote>();

  get voteSupprimerObs(): Observable<Vote> {
    return this.voteSupprimeSub.asObservable();
  }

  supprimerVote(v: Vote) {
    this.voteSupprimeSub.next(v);
  }

  constructor() { }

  listerCollegues(): Observable<Collegue[]> {
    console.log(this.collegues)
    return of(this.collegues);
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    const colabo = { ...collegue };
    if (avis === Avis.AIMER) {
      colabo.score++;
    } else if (avis === Avis.DETESTER) {
      colabo.score--;
    }
    this.voteSupprimeSub.next({ collegue: colabo, avis });
    return of(colabo);
  }
}