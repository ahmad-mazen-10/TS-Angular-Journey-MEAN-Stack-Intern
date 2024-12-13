import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
http=inject(HttpClient)
  // constructor(private http:HttpClient) { 

  // }
  getUsers():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  postUsers(data:any):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/users',data)
    }
}
