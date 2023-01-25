import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;
  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.apiBaseUrl + '/api/User');
  }
  getUserById(id: number): Observable<User[]>{
    return this.http.get<User[]>(this.apiBaseUrl + '/api/User/' + id);
  }
  postUser(userinfo:User): Observable<User[]>{
    return this.http.post<User[]>(this.apiBaseUrl + '/api/User/', userinfo);
  }
  updateUser(id:number, updateUser: User): Observable<User[]>{
    return this.http.put<User[]>(this.apiBaseUrl + '/api/User/' + id, updateUser);
  }
}
