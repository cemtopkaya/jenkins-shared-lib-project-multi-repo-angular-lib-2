import { TestBed } from '@angular/core/testing';

import { Kutup21Service } from './kutup21.service';

describe('Kutup21Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Kutup21Service = TestBed.get(Kutup21Service);
    expect(service).toBeTruthy();
  });
});
