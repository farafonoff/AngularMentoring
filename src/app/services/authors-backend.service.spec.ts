import { TestBed, inject } from '@angular/core/testing';

import { AuthorsBackendService } from './authors-backend.service';

describe('AuthorsBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsBackendService]
    });
  });

  it('should be created', inject([AuthorsBackendService], (service: AuthorsBackendService) => {
    expect(service).toBeTruthy();
  }));
});
