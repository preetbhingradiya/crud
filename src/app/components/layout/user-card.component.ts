import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { UserListRepository } from '../service/userList.repository';
import {MatDialog, MatDialogModule} from "@angular/material/dialog"
import { UpdateUSerComponent } from './update-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'components-user-card',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  template:`
    <div style="margin-bottom: 20px; background-color: aqua;box-shadow: 3px 3px; width: 200px;padding: 3px;cursor: pointer;" (click)="open()">
    <p>Name  :- {{this.user.name}}</p>
    <p>Email :- {{this.user.email}}</p>
    <button (click)="deleteUser()">DELETE</button>
    <button (click)="updateUser()">UPDATE</button>
  </div>
  `,
})
export class UserCardComponent {
  @Input() user:User;




  constructor(private userListRepository:UserListRepository,private dialog:MatDialog,private route:Router){
  }

  deleteUser(){
    this.userListRepository.DeleteUser(this.user.id)
  }

  updateUser(){
    this.dialog.open(UpdateUSerComponent,{width:'256px',data:this.user})
  }

  open(){
    this.route.navigate(['user',this.user.id])
  }
}

