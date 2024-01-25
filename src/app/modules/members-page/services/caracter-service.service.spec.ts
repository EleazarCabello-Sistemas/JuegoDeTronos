import { TestBed } from '@angular/core/testing';

import { CaracterServiceService } from './caracter-service.service';

describe('CaracterServiceService', () => {
  let service: CaracterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaracterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
