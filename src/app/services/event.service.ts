import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../models/Event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getAllEvents(): Observable<Event[]>{
    return this.httpClient.get<Event[]>('http://localhost:8080/rest/api/v1/events');
  }

  getEventById(id: number): Observable<Event>{
    return this.httpClient.get<Event>(`http://localhost:8080/rest/api/v1/events/${id}`);
  }
}
