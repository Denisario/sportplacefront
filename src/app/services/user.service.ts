import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
      return this.http.post('http://localhost:8080/rest/api/v1/login',
          {username, password}).pipe();
  }

  register(username: string, password: string, repeatPassword: string): Observable<any>{
    return this.http.post('http://localhost:8080/rest/api/v1/register', {username, password, repeatPassword}).pipe();
  }
}
