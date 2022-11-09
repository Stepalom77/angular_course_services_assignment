import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[]
  count:number

  constructor(private usersService:UsersService, private countService:CounterService){
    this.users = this.usersService.inactiveUsers
    this.count = this.countService.countInactive
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id)
  }
}
