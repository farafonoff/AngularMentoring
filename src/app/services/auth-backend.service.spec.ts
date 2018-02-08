import { TestBed, inject } from '@angular/core/testing';

import { AuthBackendService } from './auth-backend.service';

describe('AuthBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthBackendService]
    });
  });

  it('should be created', inject([AuthBackendService], (service: AuthBackendService) => {
    expect(service).toBeTruthy();
  }));
});
