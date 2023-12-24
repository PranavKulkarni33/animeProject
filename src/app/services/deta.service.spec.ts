import { TestBed } from '@angular/core/testing';

import { DetaService } from './deta.service';

describe('DetaService', () => {
  let service: DetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
