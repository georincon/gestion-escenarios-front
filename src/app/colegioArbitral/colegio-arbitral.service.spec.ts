import { TestBed } from '@angular/core/testing';

import { ColegioArbitralService } from './colegio-arbitral.service';

describe('ColegioArbitralService', () => {
  let service: ColegioArbitralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColegioArbitralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
