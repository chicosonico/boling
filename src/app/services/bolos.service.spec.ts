import { TestBed } from '@angular/core/testing';

import { BolosService } from './bolos.service';

describe('BolosService', () => {
  let service: BolosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
