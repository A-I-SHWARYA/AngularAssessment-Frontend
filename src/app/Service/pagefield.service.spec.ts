import { TestBed } from '@angular/core/testing';

import { PagefieldService } from './pagefield.service';

describe('PagefieldService', () => {
  let service: PagefieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagefieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
