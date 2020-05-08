import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from './users';

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
    return this.http.delete('https://distinct-ringed-koi.glitch.me/users?name='+naam);
  }

}
