import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alcohol } from '../models/Alcohol-model';
import { User } from '../models/User-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  // User CRUD.
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiBaseUrl + '/api/User');
  }
  getUserById(id: number): Observable<User[]>{
    return this.http.get<User[]>(this.apiBaseUrl + '/api/User/' + id);
  }
  postUser(userinfo:any): Observable<User>{
    return this.http.post<User>(this.apiBaseUrl + '/api/User/', userinfo);
  }
  updateUser(id:number, updateUser: User): Observable<User[]>{
    return this.http.put<User[]>(this.apiBaseUrl + '/api/User/' + id, updateUser);
  }
  deleteUser(id:number): Observable<User[]>{
    return this.http.delete<User[]>(this.apiBaseUrl + '/api/User/' + id);
  }


  //Alcohol CRUD
  getAllDrinks():Observable<Alcohol[]>{
    return this.http.get<Alcohol[]>(this.apiBaseUrl + '/api/Alcohol/');
  }
  getDrinkById(id: number): Observable<Alcohol[]>{
    return this.http.get<Alcohol[]>(this.apiBaseUrl + '/api/Alcohol/' + id);
  }
  postDrink(alcoinfo:any): Observable<Alcohol[]>{
    return this.http.post<Alcohol[]>(this.apiBaseUrl + '/api/Alcohol/', alcoinfo);
  }
  updateDrink(id:number, updateDrink: Alcohol): Observable<Alcohol[]>{
    return this.http.put<Alcohol[]>(this.apiBaseUrl + '/api/Alcohol/' + id, updateDrink);
  }
  deleteDrink(id:number): Observable<Alcohol>{
    return this.http.delete<Alcohol>(this.apiBaseUrl + '/api/Alcohol/' + id);
  }
}
