import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
  })
  export class AppComponent {
    title = 'NotesApp';
    constructor(apiService: ApiService) {
        apiService.getUsers().subscribe((data) => {
            console.log(data);
        })
    }
  }

