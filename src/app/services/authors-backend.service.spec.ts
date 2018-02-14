import { TestBed, inject } from '@angular/core/testing';
import { AuthorsBackendService } from './authors-backend.service';
import { XHRBackend, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('AuthorsBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [AuthorsBackendService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([AuthorsBackendService], (service: AuthorsBackendService) => {
    expect(service).toBeTruthy();
  }));
});
