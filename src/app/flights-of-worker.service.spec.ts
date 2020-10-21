import { TestBed } from '@angular/core/testing';

import { FlightsOfWorkerService } from './flights-of-worker.service';

describe('FlightsOfWorkerService', () => {
  let service: FlightsOfWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsOfWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
