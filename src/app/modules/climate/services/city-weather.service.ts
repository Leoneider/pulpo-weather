import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City, WeatherCity } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {
  httpClient = inject(HttpClient)

  constructor() { }

  getCity(searchCity: string): Observable<City[]> {
    return this.httpClient.get<City[]>(`https://api.weatherapi.com/v1/search.json?q=${searchCity}&key=5be8cbc0cd834226a25153715252501`)
  }

  getCurrentWeather(city: City): Observable<WeatherCity> {
    return this.httpClient.get<WeatherCity>(`https://api.weatherapi.com/v1/current.json?key=5be8cbc0cd834226a25153715252501&q=${city.name}`)
  }
}
