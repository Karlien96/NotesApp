import { Injectable } from '@angular/core';
import { Gebruiker } from './gebruikers';
import { GEBRUIKERS } from './fake-gebruikers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {/*
  getUsers(): Observable<Gebruiker[]> {
    return of(GEBRUIKERS);
  }*/
  constructor() { }
}
