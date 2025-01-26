import { TestBed } from '@angular/core/testing';
import { FavoritesService } from './favorites.service';
import { WeatherCity } from '../../../modules/climate/models/city';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if a city is a favorite', () => {
    const mockCity: WeatherCity = {
      location: {
        name: 'Favorite City',
        region: '',
        country: '',
        lat: 0,
        lon: 0,
        tz_id: '',
        localtime_epoch: 0,
        localtime: ''
      },
      current: {
        temp_c: 0,
        condition: { text: '', icon: '', code: 0 },
        wind_kph: 0,
        wind_degree: 0,
        wind_dir: '',
        pressure_mb: 0,
        precip_mm: 0,
        humidity: 0,
        cloud: 0,
        feelslike_c: 0,
        vis_km: 0,
        uv: 0,
        gust_kph: 0,
        last_updated_epoch: 0,
        last_updated: '',
        temp_f: 0,
        is_day: 0,
        wind_mph: 0,
        pressure_in: 0,
        precip_in: 0,
        feelslike_f: 0,
        vis_miles: 0,
        windchill_c: 0,
        windchill_f: 0,
        heatindex_c: 0,
        heatindex_f: 0,
        dewpoint_c: 0,
        dewpoint_f: 0,
        gust_mph: 0
      }
    };
    service.addFavoriteCity(mockCity);
    expect(service.isFavoriteCity(mockCity)).toBeTrue();
  });
});

