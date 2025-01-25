import { Injectable } from '@angular/core';
import { WeatherCity } from '../../../modules/climate/models/city';

@Injectable({
  providedIn: 'root'
})
export class HistorialStorageService {
  weatherCitiesHistorial: WeatherCity[] = [];

  constructor() {
    const storedHistorial = localStorage.getItem('weatherCitiesHistorial');
    if (storedHistorial) {
      this.weatherCitiesHistorial = JSON.parse(storedHistorial);
    }
  }

  addWeatherCityHistorial(weatherCity: WeatherCity) {
    const exists = this.weatherCitiesHistorial.some(city => city.location.name === weatherCity.location.name);
    if (!exists) {
      this.weatherCitiesHistorial.push(weatherCity);
      localStorage.setItem('weatherCitiesHistorial', JSON.stringify(this.weatherCitiesHistorial));
    }
  }
}
