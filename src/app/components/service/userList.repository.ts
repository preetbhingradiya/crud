import {  Injectable, } from "@angular/core";
import { ApiService } from "./api.service";
import { Store } from "@ngrx/store";
import { RootReducerState, getUserError, getUserLoad, getUserLoading, getUsers } from "../../reducer/index-reducer";
import { Observable, combineLatest, take } from "rxjs";
import { UserDeleteAction, UserListErrorAction, UserListRequestAction, UserListSuccessAction } from "../../actions/user-action";
import { User } from "../models/user";



@Injectable()

export class UserListRepository {
  constructor(private apiService: ApiService, private store: Store<RootReducerState>) { }

  //return loaded is boolean and getUser is User[]
  grtUserList(force=false):[Observable<boolean>,Observable<User[]>,Observable<boolean>] {
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoad);
    const getUser$ = this.store.select(getUsers);
    const getUserError$ = this.store.select(getUserError);

    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((response) => {
      if ((!response[0] && !response[1]) || force) {
        this.store.dispatch(new UserListRequestAction())
        this.apiService.getAllData().subscribe(res => {
            setTimeout(()=>{
              this.store.dispatch(new UserListSuccessAction({ data: res }))
            },400)
        },error=>{
          this.store.dispatch(new UserListErrorAction())
        })

      }
    })
    return [loading$,getUser$,getUserError$]
  }

  DeleteUser(id:number){
    //first can delete actual user
    this.store.dispatch(new UserDeleteAction({id}))
  }
}
