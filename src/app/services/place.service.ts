import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(private httpClient: HttpClient) { }

  getAllPlacesNames(): Observable<string[]>{
    return this.httpClient
      .get<string[]>('http://localhost:8080/rest/api/v1/places/names');
  }

  savePlace(name: string, country: string, city: string, street: string, placeNum: string): Observable<any>{
    return this.httpClient
      .post('http://localhost:8080/rest/api/v1/places', {name, country, city, street, placeNum})
      .pipe();
  }

  getAllCountries(): Observable<string[]>{
    return this.httpClient
      .get<string[]>('http://localhost:8080/rest/api/v1/places/countries')
      .pipe();
  }

  getAllPlacenamesByCountryName(countryName: string): Observable<string[]>{
    return this.httpClient
      .get<string[]>(`http://localhost:8080/rest/api/v1/places/placeNames?countryName=${countryName}`)
      .pipe();
  }
}
