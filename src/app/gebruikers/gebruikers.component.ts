import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.css']
})
export class GebruikersComponent implements OnInit {

  constructor(apiService: APIService) {
    apiService.getUsers().subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
