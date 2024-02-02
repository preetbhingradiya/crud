import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'components-user-card',
  standalone: true,
  imports: [CommonModule],
  template:`
    <div style="margin-bottom: 20px; background-color: aqua;box-shadow: 3px 3px; width: 200px;padding: 3px;">
    <p>Name  :- {{this.user.name}}</p>
    <p>Email :- {{this.user.email}}</p>
  </div>
  `,
})
export class UserCardComponent {
  @Input() user:User;

  constructor(){}

}

