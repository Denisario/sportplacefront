import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllCommentByEventId(id: number): Observable<Comment[]>{
    return this.httpClient
      .get<Comment[]>(`http://localhost:8080/rest/api/v1/comments/${id}`);
  }
}
