import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {User} from '../users';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  constructor(private apiService: ApiService) {
    this.apiService.getUsers().subscribe((data : Array<User>) => {
      this.users = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  nieuweNaam: string;

  AddUserComponent = () => {
    this.apiService.addUser(this.nieuweNaam).subscribe((response) => {
      console.log(response);
    });
  }

  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
