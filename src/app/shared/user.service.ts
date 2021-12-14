import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequestPayload } from './user-request.payload';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get('https://reqres.in/api/users')
  }
  createUser(userPayload:UserRequestPayload):Observable<any>{
    return this.http.post('https://reqres.in/api/users',userPayload);
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete('https://reqres.in/api/users');
  }
  editUser(userPayload:UserRequestPayload):Observable<any>{
    return this.http.put('https://reqres.in/api/users',userPayload);
  }
}
