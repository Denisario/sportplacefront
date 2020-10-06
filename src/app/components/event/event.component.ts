import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {Event} from '../../models/Event';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {
  id: number;
  event: Event;
  comments: Comment[];
  constructor(private eventService: EventService,
              private commentService: CommentService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getEventById();
    this.getCommentsByEventId();
  }

  getEventById(): void{
    this.eventService.getEventById(this.id).subscribe((event) => this.event = event);
  }

  getCommentsByEventId(): void{
    this.commentService.getAllCommentByEventId(this.id).subscribe((comments) => {
      this.comments = comments;
    });
  }
}
