import { TestBed } from '@angular/core/testing';

import { HandleUrlParamsService } from './handle-url-params.service';

describe('HandleUrlParamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandleUrlParamsService = TestBed.get(HandleUrlParamsService);
    expect(service).toBeTruthy();
  });
});
