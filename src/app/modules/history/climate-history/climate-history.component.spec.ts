import { ComponentFixture, TestBed } from '@angular/core/testing';

import ClimateHistoryComponent from './climate-history.component';

describe('ClimateHistoryComponent', () => {
  let component: ClimateHistoryComponent;
  let fixture: ComponentFixture<ClimateHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimateHistoryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClimateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
