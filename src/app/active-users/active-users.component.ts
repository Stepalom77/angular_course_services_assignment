import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];
  count:number

  constructor(private usersService:UsersService, private countService:CounterService){
    this.users = this.usersService.activeUsers
    this.count = this.countService.countActive
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id)
  }
}
