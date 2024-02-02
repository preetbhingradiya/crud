import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { UserCardComponent } from './user-card.component';

@Component({
  selector: 'components-user-list',
  standalone: true,
  imports: [CommonModule,UserCardComponent],
  template:`
  <div >
    <components-user-card *ngFor="let item of users" [user]="item" ></components-user-card>
  </div>
  `,
})
export class UserListComponent {

  @Input() users:User[];

  constructor(){}

}

