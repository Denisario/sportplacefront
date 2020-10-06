import { Component, OnInit } from '@angular/core';
import {PlaceService} from '../../services/place.service';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.sass']
})
export class AddEventComponent implements OnInit {
  placeNames: string[];
  event = {name: '', startDate: new Date(), finishDate: new Date(), placeName: ''};

  constructor(private placeService: PlaceService,
              private eventService: EventService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllPlaceNames();
  }

  getAllPlaceNames(): void{
    this.placeService
      .getAllPlacesNames()
      .subscribe(placeNames => this.placeNames = placeNames);
  }

  addEvent(): void{
    this.eventService
      .saveEvent(this.event.name, this.event.startDate, this.event.finishDate, this.event.placeName)
      .subscribe(() => {
        this.router
          .navigate(['/events']);
    });
  }

}
