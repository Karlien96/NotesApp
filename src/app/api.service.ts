import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {  }

  getUsers = () => {
    return this.http.get('https://distinct-ringed-koi.glitch.me/users');
  }

  
}

