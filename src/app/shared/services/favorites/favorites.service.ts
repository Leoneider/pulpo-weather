import { Injectable } from '@angular/core';
import { WeatherCity } from '../../../modules/climate/models/city';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoritesCities: WeatherCity[] = [];
  constructor() {
    const storedFavorites = localStorage.getItem('favoritesCities');
    if (storedFavorites) {
      this.favoritesCities = JSON.parse(storedFavorites);
    }
  }

  addFavoriteCity(weatherCity: WeatherCity) {
    if (!this.isFavoriteCity(weatherCity)) {
      this.favoritesCities.push(weatherCity);
      localStorage.setItem('favoritesCities', JSON.stringify(this.favoritesCities));
    }
  }

  isFavoriteCity(weatherCity: WeatherCity) {
    return this.favoritesCities.some((city) => city.location.name === weatherCity.location.name);
  }
}
