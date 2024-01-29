import { ActionReducerMap, MetaReducer, createSelector } from "@ngrx/store";
import * as fromUser from "./user-reducer";
import { isDevMode } from "@angular/core";

export interface RootReducerState{
  users:fromUser.UserReducerState;
}

export const rootReducer:ActionReducerMap<RootReducerState>={
  users:fromUser.UserReducer
}


export const metaReducers:MetaReducer<RootReducerState>[]=isDevMode()?[]:[];

//selector
export const getUserState=(state:RootReducerState)=>state.users

export const getUserLoad=createSelector(getUserState,fromUser.getLoaded)
export const getUserLoading=createSelector(getUserState,fromUser.getLoading)
export const getUsers=createSelector(getUserState,fromUser.getUsers)

