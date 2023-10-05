import { TestBed } from '@angular/core/testing';

import { CompanhiaService } from './companhia.service';

describe('CompanhiaService', () => {
  let service: CompanhiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanhiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
