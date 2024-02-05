import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './models/user';
import { ApiService } from './service/api.service';
import { HttpService } from './service/http.service';
import { UserCardComponent } from './layout/user-card.component';
import { UserListComponent } from './layout/user-list.component';
import { Store } from '@ngrx/store';
import { RootReducerState, getUserLoad, getUserLoading, getUsers } from '../reducer/index-reducer';
import { UserListRequestAction, UserListSuccessAction } from '../actions/user-action';
import { combineLatest, takeWhile } from 'rxjs';
import { UserListRepository } from './service/userList.repository';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UpdateUSerComponent } from './layout/update-user.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog"


@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserCardComponent, UserListComponent, UpdateUSerComponent,MatProgressSpinnerModule, MatIconModule, MatIcon,MatDialogModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  providers: [ApiService, HttpService, UserListRepository]
})
export class ComponentsComponent implements OnInit,OnDestroy {

  users: User[] = []

  loading:boolean=false;
  error: boolean = false
  isAlive:boolean=true

  constructor(private userList: UserListRepository,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.fetchData()
  }

  ngOnDestroy(): void {
      this.isAlive=false
  }

  //dependency injection
  //component -> userListRepositroy -> apiService -> httpService -> httpClient

  fetchData() {
    const observable$ = this.userList.grtUserList()
    const Loading = observable$[0];  //0 1 2 index of loading userdata userError
    const userData = observable$[1];
    const Error = observable$[2];

    userData.pipe(takeWhile(()=>this.isAlive)).subscribe((res) => {
      this.users = res
    })

    Loading.pipe(takeWhile(()=>this.isAlive)).subscribe(data => {
      this.loading = data
    })

    Error.pipe(takeWhile(()=>this.isAlive)).subscribe((err) => {
      this.error = err
    })
  }

  addUser(){
    this.dialog.open(UpdateUSerComponent,{width:'256px'})
  }

  tryAgain() {
    this.userList.grtUserList(true)
  }

  // fetchData() {
  //   const loading$ = this.store.select(getUserLoading);
  //   const loaded$ = this.store.select(getUserLoad);
  //   const getUser$ = this.store.select(getUsers);

  //   combineLatest([loaded$, loading$]).subscribe((response) => {
  //     if (!response[0] && !response[1]) {
  //       this.store.dispatch(new UserListRequestAction())
  //       this.apiService.getAllData().subscribe(res => {
  //         this.store.dispatch(new UserListSuccessAction({ data: res }))
  //       })
  //     }
  //   })
  //   getUser$.subscribe((ele) => {
  //     this.users = ele
  //     console.log(ele);
  //   })
  // }


  //without Ngrx
  // fetchData(){
  //   this.apiService.getAllData().subscribe((ele)=>{
  //     this.users=ele
  //   })
  // }

}
