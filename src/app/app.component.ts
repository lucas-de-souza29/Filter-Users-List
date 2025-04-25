import { Component, OnInit } from '@angular/core';
import { InterfaceUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { InterfaceFilterOption } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    userSelected: InterfaceUser = {} as InterfaceUser;
    showUserDetails: boolean = false;
    usersList: InterfaceUser[] = []; 
    
    usersListFiltered: InterfaceUser[] = [];

    ngOnInit() {
      setTimeout(() => {
        this.usersList = UsersList;
        this.usersListFiltered = UsersList;
      }, 1);
      
    }
    onUserSelected(user: InterfaceUser) {
       this.userSelected = user;
       this.showUserDetails = true;
    }

    onFilter(filterOptions: InterfaceFilterOption) {
       this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
    }
}
