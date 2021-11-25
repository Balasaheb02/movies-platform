import { TestBed } from '@angular/core/testing';

import { MoviesSService } from './movies-s.service';

describe('MoviesSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesSService = TestBed.get(MoviesSService);
    expect(service).toBeTruthy();
  });
});
