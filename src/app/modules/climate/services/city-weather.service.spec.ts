import { TestBed } from '@angular/core/testing';

import { CityWeatherService } from './city-weather.service';

describe('CityService', () => {
  let service: CityWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
