
import {Action} from '../actions'
import { USER_DELETE, USER_LIST_ADD_USER, USER_LIST_ERROR, USER_LIST_REQUESRT, USER_LIST_SUCCESS, USER_LIST_UPDATE } from "../actions/user-action";
import { User } from "../components/models/user";

export interface UserReducerState{
  loading:boolean,
  loaded:boolean,
  error:boolean
  users :User[]
}

const initialState:UserReducerState={
  loading:false,
  loaded:false,
  error:false,
  users:[]
}

export function UserReducer(state=initialState,action:Action):UserReducerState{

  switch (action.type) {
    case USER_LIST_REQUESRT:{
      return {...state,loading:true}
    }

    case USER_LIST_ERROR:{
      return {...state,error:true,loading:false}
    }

    case USER_LIST_SUCCESS:{
      let updatedUser=state.users.concat(action.payload.data);
      return {...state,loaded:true,loading:false,users:updatedUser,error:false}
    }

    case USER_LIST_ADD_USER:{
      const users=state.users.concat(action.payload.data)
      return {...state,...{users}}
    }

    case USER_LIST_UPDATE:{
      const users=state.users.filter(data=>data.id !== action.payload.data.id)
      console.log(users);
      const UpdateUser=users.concat(action.payload.data)
      return {...state,...{users:UpdateUser}}
    }

    case USER_DELETE:{
      const users=state.users.filter(data=>data.id !== action.payload.id)
      return {...state,...{users}}
    }

    default:{
      return state;
    }
  }
}


//selector
export const getLoading=(state:UserReducerState)=>state.loading
export const getLoaded=(state:UserReducerState)=>state.loaded
export const getUsers=(state:UserReducerState)=>state.users
export const getError=(state:UserReducerState)=>state.error
