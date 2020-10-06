import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {Event} from '../../models/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {
  id: number;
  event: Event;
  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getEventById();
  }

  getEventById(): void{
    this.eventService.getEventById(this.id).subscribe((event) => this.event = event);
  }
}
