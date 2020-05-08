import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Gebruiker } from '../gebruikers';
import { GebruikerService } from '../gebruiker.service';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.css']
})
export class GebruikersComponent implements OnInit {

  /*constructor(apiService: APIService) {
    apiService.getUsers().subscribe((data) => {
      console.log(data);
    })
  }*/

  gebruikers: Gebruiker[];

  geselecteerdeGebruiker: Gebruiker;

  constructor(private apiService: APIService) {}

  ngOnInit() {
  }

  onSelect(gebruiker: Gebruiker): void {
    this.geselecteerdeGebruiker = gebruiker;
  }

  getHeroes(): void {
    this.apiService.getUsers()
        .subscribe(gebruikers => this.gebruikers = gebruikers);

  }
/*
  ngOnInit(): void {
  }*/

}
