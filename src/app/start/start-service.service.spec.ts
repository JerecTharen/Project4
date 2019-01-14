import { TestBed } from '@angular/core/testing';

import { StartServiceService } from './start-service.service';

describe('StartServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartServiceService = TestBed.get(StartServiceService);
    expect(service).toBeTruthy();
  });
});
