import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../models/Event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getAllEvents(page: number, eventsInPage: number): Observable<Event[]>{
    return this.httpClient
      .get<Event[]>(`http://localhost:8080/rest/api/v1/event?page=${page}&&size=${eventsInPage}`);
  }

  getEventSize(): Observable<number>{
    return this.httpClient
      .get<number>(`http://localhost:8080/rest/api/v1/events`);
  }

  getEventById(id: number): Observable<Event>{
    return this.httpClient
      .get<Event>(`http://localhost:8080/rest/api/v1/events/${id}`);
  }

  saveEvent(name: string, startDate: Date, finishDate: Date, placeName: string): Observable<any>{
    return this.httpClient
      .post('http://localhost:8080/rest/api/v1/events', {name, startDate, finishDate, placeName})
      .pipe();
  }
}
