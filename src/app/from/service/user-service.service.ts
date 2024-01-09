import { Injectable } from '@angular/core';
import { userData } from '../model/userdata';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users:userData[]=[
    new userData(1,"jaggu","jaggu@gmail.com",13),
    new userData(2,"topi","topi@gmail.com",30),
  ]

  CreateUserData(name:string,email:string,age:number){
    let id=this.users.length +1;
    let user=new userData(id,name,email,age)
    this.users.push(user)
  }
}
