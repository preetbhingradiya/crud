import { userData } from "../from/model/userdata"

export const USER_LIST_REQUESRT='user list request'
export const USER_LIST_SUCCESS='user list success'

export class UserListRequest{
  readonly type=USER_LIST_REQUESRT
}

export class UserListSuccess{
  readonly type=USER_LIST_SUCCESS

  constructor(payload?:{data:userData[]}){
  }
}
