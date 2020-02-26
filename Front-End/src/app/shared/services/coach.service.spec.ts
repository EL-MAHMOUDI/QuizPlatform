import { TestBed } from '@angular/core/testing';

import { CoachService } from './coach.service';

describe('CoachService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachService = TestBed.get(CoachService);
    expect(service).toBeTruthy();
  });
});
