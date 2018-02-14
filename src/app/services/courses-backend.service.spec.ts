import { TestBed, inject } from '@angular/core/testing';

import { CoursesBackendService } from './courses-backend.service';
import { HttpModule, XHRBackend } from '@angular/http';
import { HttpAuthorized } from './http.authorized.service';
import { MockBackend } from '@angular/http/testing';

describe('CoursesBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CoursesBackendService,
        HttpAuthorized,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([CoursesBackendService], (service: CoursesBackendService) => {
    expect(service).toBeTruthy();
  }));
});
