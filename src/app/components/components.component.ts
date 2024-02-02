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

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserCardComponent, UserListComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  providers: [ApiService, HttpService]
})
export class ComponentsComponent {

  users: User[] = []

  constructor(private apiService: ApiService, private store: Store<RootReducerState>) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoad);
    const getUser$ = this.store.select(getUsers);

    combineLatest([loaded$, loading$]).subscribe((response) => {
      if (!response[0] && !response[1]) {
        this.store.dispatch(new UserListRequestAction())
        this.apiService.getAllData().subscribe(res => {
          this.store.dispatch(new UserListSuccessAction({ data: res }))
        })
      }
    })

    getUser$.subscribe((ele) => {
      this.users = ele
      console.log(ele);
    })
  }

  //without Ngrx
  // fetchData(){
  //   this.apiService.getAllData().subscribe((ele)=>{
  //     this.users=ele
  //   })
  // }

}
