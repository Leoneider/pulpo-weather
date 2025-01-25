import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FavoritesService } from '../../../shared/services/favorites/favorites.service';
import { WeatherCity } from '../../climate/models/city';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-city-climate-favorites',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './city-climate-favorites.component.html'
})
export default class CityClimateFavoritesComponent implements OnInit {
  favoriteService = inject(FavoritesService);

  weatherCitiesFavorites: WeatherCity[] = [];

  ngOnInit() {
    this.weatherCitiesFavorites = this.favoriteService.favoritesCities;
  }

  onDeleteFavoriteCity(weatherCity: WeatherCity) {
    const index = this.weatherCitiesFavorites.findIndex((city) => city.location.name === weatherCity.location.name);
    if (index !== -1) {
      this.weatherCitiesFavorites.splice(index, 1);
      this.favoriteService.favoritesCities = this.weatherCitiesFavorites;
      localStorage.setItem('favoritesCities', JSON.stringify(this.weatherCitiesFavorites));
    }
  }
}
