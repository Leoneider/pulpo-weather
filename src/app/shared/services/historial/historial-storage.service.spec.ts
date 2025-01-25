import { TestBed } from '@angular/core/testing';
import { HistorialStorageService } from './historial-storage.service';


describe('DataLocalStorageService', () => {
  let service: HistorialStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
