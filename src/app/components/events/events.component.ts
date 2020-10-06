import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {Event} from '../../models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {
  events: Event[];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void{
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }
}
