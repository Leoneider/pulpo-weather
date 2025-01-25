import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HistorialStorageService } from '../../../shared/services/historial/historial-storage.service';
import { WeatherCity } from '../../climate/models/city';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-climate-history',
  imports: [MatCardModule],
  templateUrl: './climate-history.component.html',
})
export default class ClimateHistoryComponent {
  router = inject(Router);
  dataLocalStorageService = inject(HistorialStorageService);


  weatherCitiesHistorial: WeatherCity[] = [];

  ngOnInit() {
    this.weatherCitiesHistorial = this.dataLocalStorageService.weatherCitiesHistorial;
  }

  onSelectWeatherCity(weatherCity: WeatherCity) {
    this.router.navigate(['/climate'], { state: { weatherCity } });
  }

}
