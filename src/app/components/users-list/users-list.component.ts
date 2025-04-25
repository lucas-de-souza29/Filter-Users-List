import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InterfaceUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  
  @Input({required: true}) usersList: InterfaceUser[] = UsersList;

  @Output('userSelected') userSelectedEmitt = new EventEmitter<InterfaceUser>;
  
  onUserSelected(user: InterfaceUser ) {
    this.userSelectedEmitt.emit(user);    
  }

}
