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
      const sorted = data.sort((author1, author2) => {
        const s1 = `${author1.firstName} ${author1.lastName}`;
        const s2 = `${author2.firstName} ${author2.lastName}`;
        return s1.localeCompare(s2);
      }).toList();
      this.dataSubject.next(sorted);
    });
  }

  public getList(): Observable<List<Author>> {
    return this.dataSubject;
  }

}
