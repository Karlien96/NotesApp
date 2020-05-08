import { Component } from '@angular/core';
import { APIService } from './api.service';
import { NgModule } from '@angular/core';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NotesApp';

  constructor(apiService: APIService) {
    apiService.getUsers().subscribe((data) => {
      console.log(data);
    })
  }
}
