import { Injectable } from '@angular/core';
import { AuthorsBackendService } from './authors-backend.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { List } from 'immutable';
import { Author } from '../model/author.model';

@Injectable()
export class AuthorsService {
  private dataSubject: BehaviorSubject<List<Author>>  = new BehaviorSubject<List<Author>>(List([]));

  constructor(private backend: AuthorsBackendService) {
    backend.fetchAuthors().subscribe(data => {
      this.dataSubject.next(data);
    });
  }

  public getList(): Observable<List<Author>> {
    return this.dataSubject;
  }

}
