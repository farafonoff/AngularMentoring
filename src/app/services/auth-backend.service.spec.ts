import { TestBed, inject } from '@angular/core/testing';

import { AuthBackendService } from './auth-backend.service';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpAuthorized } from './http.authorized.service';

describe('AuthBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [AuthBackendService,
        HttpAuthorized,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([AuthBackendService], (service: AuthBackendService) => {
    expect(service).toBeTruthy();
  }));
});
