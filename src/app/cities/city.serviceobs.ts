import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './cities.model'; 

@Injectable({
  providedIn: 'root',
})
export class CityServiceObs {
  private citiesUrl = 'src/api/cities.json'; // Path

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl);
  }
}


