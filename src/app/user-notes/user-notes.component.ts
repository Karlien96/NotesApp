import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users';
import { ApiService } from '../api.service';
import { Note } from '../Notes';
import { NgModule } from '@angular/core';
import { UsersComponent} from '../users/users.component';

@Component({
  selector: 'app-user-notes',
  templateUrl: './user-notes.component.html',
  styleUrls: ['./user-notes.component.css']
})
export class UserNotesComponent implements OnInit {

  notes: Array<Note>;

  constructor(private apiService: ApiService,
    private userComponent: UsersComponent) { 
      this.apiService.getNotes().subscribe((data : Array<Note>) => {
        this.notes = data;
        console.log(data);
    })
  }

  @Input() user: User;

  ngOnInit() {
    
  }

  nieuweNotitie: string;
  AddNoteComponent = () => {
    this.apiService.addNote(this.nieuweNotitie, this.userComponent.naamSelectedUser).subscribe((response) => {
      console.log(response);
    });
  }

}
