import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../model/course.model';
import { Author } from '../model/author.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeLast';
import { List } from 'immutable';

@Injectable()
export class AuthorsBackendService {

  constructor(private http: Http) { }

  public fetchAuthors(): Observable<List<Author>> {
    return this.http.get(`http://localhost:3004/authors`)
    .map(response => {
      const jsonData = response.json();
      const mapped = jsonData.map(author => {
        return new Author(author.id, author.firstName, author.lastName);
      });
      return List(mapped);
    });
  }

}
