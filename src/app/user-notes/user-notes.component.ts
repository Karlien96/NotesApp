import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users';
import { ApiService } from '../api.service';
import { Note } from '../Notes';
import { NgModule } from '@angular/core';
import { UsersComponent} from '../users/users.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-user-notes',
  templateUrl: './user-notes.component.html',
  styleUrls: ['./user-notes.component.css']
})
export class UserNotesComponent implements OnInit {

  notities: Array<Note>;

  constructor(private apiService: ApiService,
    private userComponent: UsersComponent) { 
      this.apiService.getNotes(this.userComponent.naamSelectedUser).subscribe((data : Array<Note>) => {
        this.notities = data;
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
      window.location.reload();
      this.userComponent.onSelect(this.userComponent.selectedUser);
    });
  }

  deleteUserComp = () => {
    this.apiService.deleteUser(this.userComponent.naamSelectedUser).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }

}
