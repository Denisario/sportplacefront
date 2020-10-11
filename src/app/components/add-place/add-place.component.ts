import { Component, OnInit } from '@angular/core';
import {PlaceService} from '../../services/place.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Place} from '../../models/Place';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.sass']
})
export class AddPlaceComponent implements OnInit {
  place: Place = new Place();
  id: number;
  constructor(private placeService: PlaceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if (this.id !== undefined){
      this.placeService.getPlaceById(this.id).subscribe(place => this.place = place);
    }
  }

  addPlace(): void{
    if (this.id !== undefined){
      this.placeService
        .updatePlace(this.place, this.id)
        .subscribe(() => {
          this.router.navigate(['places']);
      });
    }
    else{
      this.placeService
        .savePlace(this.place.name, this.place.country, this.place.city, this.place.street, this.place.number)
        .subscribe(() => {
          this.router
            .navigate(['admin']);
        });
    }
  }

}
