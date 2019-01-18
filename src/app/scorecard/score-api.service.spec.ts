import { TestBed } from '@angular/core/testing';

import { ScoreAPIService } from './score-api.service';

describe('ScoreAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoreAPIService = TestBed.get(ScoreAPIService);
    expect(service).toBeTruthy();
  });
});
