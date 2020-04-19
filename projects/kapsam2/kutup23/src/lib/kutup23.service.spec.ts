import { TestBed } from '@angular/core/testing';

import { Kutup23Service } from './kutup23.service';

describe('Kutup23Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Kutup23Service = TestBed.get(Kutup23Service);
    expect(service).toBeTruthy();
  });
});
