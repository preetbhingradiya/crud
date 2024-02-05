
import { createSelector } from '@ngrx/store';
import { Action } from '../actions'
import { USER_DELETE, USER_LIST_ADD_USER, USER_LIST_ERROR, USER_LIST_REQUESRT, USER_LIST_SUCCESS, USER_LIST_UPDATE } from "../actions/user-action";
import { User } from "../components/models/user";
import { StoreUtility } from '../components/utilis/store.utilites';

export interface UserReducerState {
  loading: boolean,
  loaded: boolean,
  error: boolean,
  entites: { [id: number]: User },
  ids: number[]
  users: User[],
}

const initialState: UserReducerState = {
  loading: false,
  loaded: false,
  error: false,
  entites: {},
  ids: [],
  users: []
}

export function UserReducer(state = initialState, action: Action): UserReducerState {

  switch (action.type) {
    case USER_LIST_REQUESRT: {
      return { ...state, loading: true }
    }

    case USER_LIST_ERROR: {
      return { ...state, error: true, loading: false }
    }

    case USER_LIST_SUCCESS: {
      // let updatedUser = state.users.concat(action.payload.data);
      // return { ...state, loaded: true, loading: false, users: updatedUser, error: false }

      //entites
      const users=action.payload.data;
      const obj=StoreUtility.normalize(users);
      const newEntites={...state.entites,...obj}
      const ids=users.map((ele)=>ele.id)
      const newIds=StoreUtility.filterDuplicateds([...state.ids,...ids])

      return {...state,...{loaded:true,loading:false,error:false,entites:newEntites,ids:newIds}}
    }

    case USER_LIST_ADD_USER: {
      // const users = state.users.concat(action.payload.data)
      // return { ...state, ...{ users } }

      //entites
      let user=action.payload.data
      let entites={[user.id]:user};
      let updateEnties={...state.entites,...entites}
      let newId=StoreUtility.filterDuplicateds([...state.ids,user.id])

      return {...state,...{entites:updateEnties,ids:newId}}
    }

    case USER_LIST_UPDATE: {
      // const users = state.users.filter(data => data.id !== action.payload.data.id)
      // const UpdateUser = users.concat(action.payload.data)
      // return { ...state, ...{ users: UpdateUser } }

      //entites
      let user=action.payload.data
      let entites={[user.id]:user};
      let updateEnties={...state.entites,...entites}
      return {...state,...{entites:updateEnties}}
    }

    case USER_DELETE: {
      // const users=state.users.filter(data=>data.id !== action.payload.id)
      // return {...state,...{users}}

      //entites
      let id = action.payload.id;
      let newsId = state.ids.filter((ele) => ele !== id);
      let newEntites=StoreUtility.removeKey(state.entites,id)

      return {...state,...{entites:newEntites,ids:newsId}}
    }

    default: {
      return state;
    }
  }
}


//selector
export const getLoading = (state: UserReducerState) => state.loading
export const getLoaded = (state: UserReducerState) => state.loaded
export const getError = (state: UserReducerState) => state.error
// export const getUsers = (state: UserReducerState) => state.users

export const getEntites=(state:UserReducerState)=>state.entites
export const getIds=(state:UserReducerState)=>state.ids
export const getUsers=createSelector(getEntites,getIds,(entities,ids)=>ids.map((id)=>entities[id]))
