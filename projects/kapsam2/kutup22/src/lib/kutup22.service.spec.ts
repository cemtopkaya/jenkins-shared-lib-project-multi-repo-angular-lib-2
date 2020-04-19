import { TestBed } from '@angular/core/testing';

import { Kutup22Service } from './kutup22.service';

describe('Kutup22Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Kutup22Service = TestBed.get(Kutup22Service);
    expect(service).toBeTruthy();
  });
});
