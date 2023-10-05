import { TestBed } from '@angular/core/testing';

import { PassagensService } from './passagens.service';

describe('PassagensService', () => {
  let service: PassagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
