import { User } from "../components/models/user"

export const USER_LIST_REQUESRT='user list request'
export const USER_LIST_SUCCESS='user list success'

export class UserListRequestAction{
  readonly type=USER_LIST_REQUESRT
}

export class UserListSuccessAction{
  readonly type=USER_LIST_SUCCESS

  constructor(public payload?:{data:User[]}){
  }
}
