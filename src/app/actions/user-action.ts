import { User } from "../components/models/user"

export const USER_LIST_REQUESRT='user list request'
export const USER_LIST_SUCCESS='user list success'
export const USER_LIST_ADD_USER='user add success'
export const USER_DELETE='user delete success'
export const USER_LIST_UPDATE='user update success'
export const USER_LIST_ERROR='user list error'

export class UserListRequestAction{
  readonly type=USER_LIST_REQUESRT
}

export class UserListSuccessAction{
  readonly type=USER_LIST_SUCCESS

  constructor(public payload?:{data:User[]}){
  }
}

export class UserListAddAction{
  readonly type=USER_LIST_ADD_USER

  constructor(public payload?:{data:User}){}
}

export class UserUpdateAction{
  readonly type=USER_LIST_UPDATE

  constructor(public payload?:{data:User}){}
}

export class UserDeleteAction{
  readonly type=USER_DELETE;

  constructor(public payload?:{id:number}){}
}

export class UserListErrorAction{
  readonly type=USER_LIST_ERROR
}
