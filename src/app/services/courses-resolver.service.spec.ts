import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { CoursesResolverService } from './courses-resolver.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../redux/index';
import { Observable } from 'rxjs/Observable';

describe('CoursesResolverService', () => {
  let actions: Observable<any>;  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, StoreModule.forRoot(reducer) ],
      providers: [CoursesResolverService, provideMockActions(() => actions)]
    });
  });

  it('should be created', inject([CoursesResolverService], (service: CoursesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
