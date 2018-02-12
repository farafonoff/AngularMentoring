import { Action } from '@ngrx/store';

import * as _ from 'lodash';
import { Author } from '../model/author.model';
import { AuthorsBackendService } from '../services/authors-backend.service';

export const AUTHORS_LOAD = 'AUTHORS_LOAD';
export const AUTHORS_LOAD_SUCCESS = 'AUTHORS_LOAD_SUCCESS';

export class AuthorsState {
    authors: Author[] = [];
}

export interface ActionP extends Action {
    payload: any;
}

export function authorsReducer(state: AuthorsState = new AuthorsState(), action: ActionP): AuthorsState {
    switch (action.type) {
        case AUTHORS_LOAD_SUCCESS:
            const authors = sortedAuthors(action.payload);
            return {...state, authors };
        default:
            return state;
    }
}

function sortedAuthors(authors) {
    return authors.sort((author1, author2) => {
        const s1 = `${author1.firstName} ${author1.lastName}`;
        const s2 = `${author2.firstName} ${author2.lastName}`;
        return s1.localeCompare(s2);
      });
}
