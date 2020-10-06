import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{

    return this.http
      .post('http://localhost:8080/rest/api/v1/login', {username, password})
      .pipe(map(() => {
          sessionStorage.setItem('username', username);
        }));
  }

  register(username: string, password: string, repeatPassword: string): Observable<any>{
    return this.http
      .post('http://localhost:8080/rest/api/v1/register', {username, password, repeatPassword})
      .pipe();
  }

  logout(): void{
    sessionStorage.removeItem('username');
  }

  public isUserLoggedIn(): boolean{
    return !(sessionStorage.getItem('authUser') === null);
  }
}
