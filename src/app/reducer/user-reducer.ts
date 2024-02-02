
import {Action} from '../actions'
import { USER_LIST_ERROR, USER_LIST_REQUESRT, USER_LIST_SUCCESS } from "../actions/user-action";
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
      return {...state,error:true}
    }

    case USER_LIST_SUCCESS:{
      let updatedUser=state.users.concat(action.payload.data);
      return {...state,loading:false,loaded:true,users:updatedUser,error:false}
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
