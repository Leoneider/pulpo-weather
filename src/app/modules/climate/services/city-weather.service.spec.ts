import { TestBed } from '@angular/core/testing';

import { CityWeatherService } from './city-weather.service';
import { provideHttpClient } from '@angular/common/http';
import { City, WeatherCity } from '../models/city';
import { of } from 'rxjs';


describe('CityService', () => {
  let service: CityWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(CityWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch city data', (done) => {
    const dummyCities: City[] = [
      { id: 1, name: 'New York', region: 'NY', country: 'USA', lat: 40.7128, lon: -74.0060, url: 'http://example.com/newyork' },
      { id: 2, name: 'New Angeles', region: 'CA', country: 'USA', lat: 34.0522, lon: -118.2437, url: 'http://example.com/losangeles' },
    ];

    spyOn(service, 'getCity').and.returnValue(of(dummyCities));

    service.getCity('New').subscribe(cities => {
      expect(cities.length).toBe(2);
      expect(cities).toEqual(dummyCities);
      done();
    });
  });

  it('should fetch current weather data', (done) => {
    const dummyWeather: WeatherCity = {
      location: { name: 'New York', region: 'NY', country: 'USA', lat: 40.7128, lon: -74.0060, tz_id: 'America/New_York', localtime_epoch: 1630603895, localtime: '2021-09-02 17:04' },
      current: {
        temp_c: 25.0, condition: { text: 'Sunny', icon: 'http://example.com/sunny.png', code: 1000 }, wind_kph: 10.0, wind_degree: 180, wind_dir: 'S', pressure_mb: 1013.0, precip_mm: 0.0, humidity: 50, cloud: 0, feelslike_c: 25.0, vis_km: 10.0, uv: 5.0, gust_kph: 15.0, last_updated_epoch: 1630602800, last_updated: '2021-09-02 16:46', temp_f: 77.0, is_day: 1, wind_mph: 6.2, pressure_in: 30.4, precip_in: 0.0, feelslike_f: 77.0, vis_miles: 6.0,
        windchill_c: 25.0,
        windchill_f: 77.0,
        heatindex_c: 25.0,
        heatindex_f: 77.0,
        dewpoint_c: 15.0,
        dewpoint_f: 59.0,
        gust_mph: 9.3
      }
    };

    const city: City = { id: 1, name: 'New York', region: 'NY', country: 'USA', lat: 40.7128, lon: -74.0060, url: 'http://example.com/newyork' };

    spyOn(service, 'getCurrentWeather').and.returnValue(of(dummyWeather));

    service.getCurrentWeather(city).subscribe(weather => {
      expect(weather).toEqual(dummyWeather);
      done();
    });
  });
});
