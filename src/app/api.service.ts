import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Gebruiker } from './gebruikers';
import { Notities } from './notities';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {  }

  addUser = (value: string) => {
    return this.http.post('https://distinct-ringed-koi.glitch.me/users', {name: value});
  }

  getUsers = ():Observable<Gebruiker[]> => {
    return this.http.get<Gebruiker[]>('https://distinct-ringed-koi.glitch.me/users');
  }
/*
  addUser = (nieuweNaam: string) => {
    let x = encodeURI('https://distinct-ringed-koi.glitch.me/users');
    return this.http.post(x, { name: nieuweNaam });
  }

  deleteUser = (tvNaam: string) => {
    let y = encodeURIComponent(tvNaam);
    let z = encodeURI('https://distinct-ringed-koi.glitch.me/users?name=') + y;
    console.log(z);
    return this.http.delete(z);
  }

  addNote = (naam: string, notite: string) => {
    let name = encodeURI(naam);
    let a = encodeURI('https://distinct-ringed-koi.glitch.me/users/') + name + encodeURI('/notes');
    return this.http.post(a, { content : notite});
  }

  showNotes = (naam: string):Observable<Notities[]> => {
    let name = encodeURIComponent(naam);
    let b = encodeURI('https://distinct-ringed-koi.glitch.me/notes/?name=') + name;
    return this.http.get<Notities[]>(b);
  }*/
  
}

