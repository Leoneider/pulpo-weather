import { ComponentFixture, TestBed } from '@angular/core/testing';

import CityClimateFavoritesComponent from './city-climate-favorites.component';

describe('CityClimateFavoritesComponent', () => {
  let component: CityClimateFavoritesComponent;
  let fixture: ComponentFixture<CityClimateFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityClimateFavoritesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CityClimateFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
