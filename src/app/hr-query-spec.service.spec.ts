import { TestBed } from '@angular/core/testing';

import { HrQuerySpecService } from './hr-query-spec.service';

describe('HrQuerySpecService', () => {
  let service: HrQuerySpecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrQuerySpecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
