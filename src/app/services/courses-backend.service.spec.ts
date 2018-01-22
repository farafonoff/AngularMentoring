import { TestBed, inject } from '@angular/core/testing';

import { CoursesBackendService } from './courses-backend.service';

describe('CoursesBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesBackendService]
    });
  });

  it('should be created', inject([CoursesBackendService], (service: CoursesBackendService) => {
    expect(service).toBeTruthy();
  }));
});
