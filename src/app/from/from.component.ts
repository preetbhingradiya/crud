import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './service/user-service.service';
import { userData } from './model/userdata';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './from.component.html',
  styles:['button {cursor:pointer;}']
})
export class FormComponent implements OnInit {

  uesrService: UserServiceService = inject(UserServiceService)


  isEditing: boolean = false;
  isInserting: boolean = false;
  isEditingID: number;

  oneUser: userData[]

  //inserting value
  @ViewChild('name') insertName: ElementRef
  @ViewChild('email') insertEmail: ElementRef
  @ViewChild('age') insertAge: ElementRef

  //Editing value
  @ViewChild('editName') editName: ElementRef
  @ViewChild('editEmail') editEmail: ElementRef
  @ViewChild('editAge') editAge: ElementRef

  ngOnInit(): void {
    this.oneUser = this.uesrService.users
  }

  //Insert User
  onInsertData() {
    this.isInserting = true
  }
  OnInsertCancelled() {
    this.isInserting = false
  }
  OnInsertSaved() {
    this.uesrService.CreateUserData(
      this.insertName.nativeElement.value,
      this.insertEmail.nativeElement.value,
      this.insertAge.nativeElement.value
    )
    this.isInserting = false
  }


  //Delete USer
  deleteUser(id: number) {
    this.oneUser = this.oneUser.filter((ele) => ele.id !== id)
  }

  //Edit User
  onEditedClicked(val: number) {
    this.isEditingID=val
    this.isEditing = true;
  }
  onEditedChange(user: userData) {
    user.name = this.editName.nativeElement.value
    user.email = this.editEmail.nativeElement.value
    user.age = this.editAge.nativeElement.value

    this.isEditing = false
  }
}
