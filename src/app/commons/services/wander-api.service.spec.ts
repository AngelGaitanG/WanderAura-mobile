import { TestBed } from '@angular/core/testing';

import { WanderApiService } from './wander-api.service';

describe('WanderApiService', () => {
  let service: WanderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WanderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
