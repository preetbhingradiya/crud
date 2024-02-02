import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient:HttpClient) { }

  getUser(){
    return this.httpClient.get(this.baseUrl)
  }
}
