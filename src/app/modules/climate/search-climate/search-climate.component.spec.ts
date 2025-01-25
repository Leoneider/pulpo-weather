import { ComponentFixture, TestBed } from '@angular/core/testing';

import  SearchClimateComponent  from './search-climate.component';

describe('SearchClimateComponent', () => {
  let component: SearchClimateComponent;
  let fixture: ComponentFixture<SearchClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchClimateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
