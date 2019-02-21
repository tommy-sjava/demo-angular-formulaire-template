import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL_BACKEND = environment.backendUrl;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegues: Collegue[]

  private voteSupprimeSub = new Subject<Vote>();

  get voteSupprimerObs(): Observable<Vote> {
    return this.voteSupprimeSub.asObservable();
  }

  supprimerVote(v: Vote) {
    this.voteSupprimeSub.next(v);
  }

  constructor(private _http: HttpClient) { }

  listerCollegues(): Observable<Collegue[]> {

    return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`);

  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    return this._http.patch<Collegue>(`${URL_BACKEND}/collegues/${collegue.pseudo}`, `{ "action" : "${avis}" }`, httpOptions).pipe(tap(value => this.voteSupprimeSub.next({ collegue: value, avis })));
  }
}