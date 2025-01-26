import { ComponentFixture, TestBed } from '@angular/core/testing';

import  SearchClimateComponent  from './search-climate.component';
import { provideHttpClient } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchClimateComponent', () => {
  let component: SearchClimateComponent;
  let fixture: ComponentFixture<SearchClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchClimateComponent, NoopAnimationsModule,],
      providers: [provideHttpClient()],
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
