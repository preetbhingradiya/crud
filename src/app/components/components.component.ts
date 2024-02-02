import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './models/user';
import { ApiService } from './service/api.service';
import { HttpService } from './service/http.service';
import { UserCardComponent } from './layout/user-card.component';
import { UserListComponent } from './layout/user-list.component';
import { Store } from '@ngrx/store';
import { RootReducerState, getUserLoad, getUserLoading, getUsers } from '../reducer/index-reducer';
import { UserListRequestAction, UserListSuccessAction } from '../actions/user-action';
import { combineLatest } from 'rxjs';
import { UserListRepository } from './service/userList.repository';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserCardComponent, UserListComponent, MatProgressSpinnerModule, MatIconModule, MatIcon],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  providers: [ApiService, HttpService, UserListRepository]
})
export class ComponentsComponent {

  users: User[] = []

  loading: boolean = false;
  error: boolean = false

  constructor(private userList: UserListRepository) { }

  ngOnInit(): void {
    this.fetchData()
  }

  //dependency injection
  //component -> userListRepositroy -> apiService -> httpService -> httpClient

  fetchData() {
    const observable$ = this.userList.grtUserList()
    const Loading = observable$[0];  //0 1 2 index of loading userdata userError
    const userData = observable$[1];
    const Error = observable$[2];

    userData.subscribe((res) => {
      this.users = res
    })

    Loading.subscribe((data) => {
      this.loading = data
      }
    )

    Error.subscribe((err) => {
      this.loading = err
    })
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
