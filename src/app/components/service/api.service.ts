import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { User } from '../../components/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService:HttpService) { }

  getAllData():Observable<User[]>{
    return this.httpService.getUser().pipe(map(data=>data as User[]))
  }
}
