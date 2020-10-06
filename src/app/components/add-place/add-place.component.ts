import { Component, OnInit } from '@angular/core';
import {PlaceService} from '../../services/place.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.sass']
})
export class AddPlaceComponent implements OnInit {
  place = {name: '', country: '', city: '', street: '', number: ''};

  constructor(private placeService: PlaceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addPlace(): void{
    this.placeService
      .savePlace(this.place.name, this.place.country, this.place.city, this.place.street, this.place.number)
      .subscribe(() => {
        this.router
          .navigate(['admin']);
    });
  }

}
