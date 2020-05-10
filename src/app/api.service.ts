import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from './users';
import {Note} from './Notes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addUser = (value: String) => {
    return this.http.post('https://distinct-ringed-koi.glitch.me/users', {name: value});
  }

  getUsers = () :Observable<User[]> => {
    return this.http.get<User[]>('https://distinct-ringed-koi.glitch.me/users');
  }

  deleteUser = (naam: string) => { 
    return this.http.get('https://distinct-ringed-koi.glitch.me/remove?name='+naam);
  }

  addNote = (value: string, naam: string) => {
    return this.http.post('https://distinct-ringed-koi.glitch.me/notes?name='+naam, {content: value, name: naam})
  }

  getNotes = (naam: string) :Observable<Note[]> => {
    return this.http.get<Note[]>('https://distinct-ringed-koi.glitch.me/notes?name='+naam);
  }

}
