import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from "@angular/material/input"
import { User } from '../models/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserListRepository } from '../service/userList.repository';
import { ApiService } from '../service/api.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'components-update-user',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  providers:[UserListRepository,ApiService, HttpService],
  template: `
    <form [formGroup]="userForm" (ngSubmit)="userForm.value && addOrUpdate()">
      <div>
        <mat-form-field>
          <label>Name :-</label>
          <input matInput type="text" formControlName='name' placeholder="name">
          <mat-error>Name Field Is Required</mat-error>
        </mat-form-field><br>
        <mat-form-field>
        <label>Email :-</label>
          <input matInput type="text" formControlName='email' placeholder="Email">
          <mat-error>Valid Email Is Required</mat-error>
        </mat-form-field>
        <button type="submit">SAVE</button>
    </div>
    </form>
  `,
})
export class UpdateUSerComponent implements OnInit {

  userForm: FormGroup

  constructor(private dialogRef: MatDialogRef<UpdateUSerComponent>, @Inject(MAT_DIALOG_DATA) public data: User,private userListRepository:UserListRepository) {
    console.log(this.data);
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.data ? this.data.name : null, [Validators.required]),
      email: new FormControl(this.data ? this.data.email : null, [Validators.required])
    })
  }

  addOrUpdate(){
    if(this.data){
      this.UpdateUser()
    }
    else{
      this.addUser()
    }
  }

  UpdateUser() {
    const user={...this.data,...this.userForm.value}
    this.userListRepository.UpdateUser(user);
    this.dialogRef.close()
  }

  addUser(){
    this.userListRepository.addUser(this.userForm.value)
    console.log(this.userForm.value)
    this.dialogRef.close()
  }
}

