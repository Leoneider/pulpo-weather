import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DropdownTriggerForDirective } from '../../../shared/components/dropdown/dropdown-trigger-for.directive';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { City, WeatherCity } from '../models/city';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CityWeatherService } from '../services/city-weather.service';
import { HistorialStorageService } from '../../../shared/services/historial/historial-storage.service';
import { FavoritesService } from '../../../shared/services/favorites/favorites.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-search-climate',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, DropdownTriggerForDirective, DropdownComponent, ReactiveFormsModule],
  templateUrl: './search-climate.component.html',
})
export default class SearchClimateComponent implements OnInit {
  router = inject(Router);
  cityService = inject(CityWeatherService);
  historialStorageService = inject(HistorialStorageService);
  favoriteService = inject(FavoritesService);


  cities: City[] = []
  searchInput = new FormControl('', [Validators.required, Validators.minLength(4)]);


  ngOnInit() {
    this.subscribeSearchInput();
    const navigation = this.router.lastSuccessfulNavigation;
    if (navigation?.extras.state) {
      this.weatherCity = navigation.extras.state['weatherCity'] as WeatherCity;
    }
  }

  subscribeSearchInput() {
    this.searchInput.valueChanges.pipe(
      debounceTime(600)
    ).subscribe((value) => {
      if (!value || value.length < 4) {
        this.cities = [];
        this.weatherCity = null;
        return;
      }
      this.cityService.getCity(value).subscribe({
        next: (cities) => {
          this.cities = cities;
        }
      });

    });
  }

  weatherCity: WeatherCity | null = null;
  onClickCity(city: City) {
    this.cityService.getCurrentWeather(city).subscribe({
      next: (weatherCity) => {
        this.weatherCity = weatherCity;
        this.historialStorageService.addWeatherCityHistorial(weatherCity);
      }
    });

  }

  onFavoriteCity(weatherCity: WeatherCity | null) {
    if (weatherCity) {
      this.favoriteService.addFavoriteCity(weatherCity);
    }
  }

  get isFavorite() {
    if (!this.weatherCity) {
      return false;
    }
    return this.favoriteService.isFavoriteCity(this.weatherCity);
  }
}
