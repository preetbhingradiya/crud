import { Injectable } from '@angular/core';
import { stuentData } from '../model/studentdata';

@Injectable({
  providedIn: 'root'
})
export class studetServiceService {

  users:stuentData[]=[
    new stuentData("jaggu","jaggu@gmail.com","male",'bca'),
    new stuentData("alice","alice@gmail.com","female",'bcom'),
    new stuentData("topi","topi@gmail.com","male",'bba'),
    new stuentData("bob","bob@gmail.com","female",'bca'),
  ]

  // CreateUserData(name,email,age){
  //   let id=this.users.length +1;
  //   let user=new userData(id,name,email,age)
  //   this.users.push(user)
  // }
}
