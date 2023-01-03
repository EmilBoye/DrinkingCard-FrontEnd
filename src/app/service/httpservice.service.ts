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
    return this.http.get<User[]>(this.apiBaseUrl + '/api/user');
  }
  postUser(): Observable<User[]>{
    return this.http.post<User[]>(this.apiBaseUrl + '/api/User');
  }
}
