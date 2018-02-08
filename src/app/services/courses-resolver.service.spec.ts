import { TestBed, inject } from '@angular/core/testing';

import { CoursesResolverService } from './courses-resolver.service';

describe('CoursesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesResolverService]
    });
  });

  it('should be created', inject([CoursesResolverService], (service: CoursesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
