import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AuthorsBackendService } from '../services/authors-backend.service';
import { Store } from '@ngrx/store';
import { State } from './index';
import { AUTHORS_LOAD, AUTHORS_LOAD_SUCCESS } from './authors.reducer';

@Injectable()
export class AuthorsEffects {
    constructor(private actions: Actions,
        private authorsBackend: AuthorsBackendService,
        private store: Store<State>
    ) {
    }

    @Effect() loadAuthor = this.actions
    .ofType(AUTHORS_LOAD)
    .switchMap(() => {
        return this.authorsBackend.fetchAuthors();
    })
    .map(authors => ({ type: AUTHORS_LOAD_SUCCESS, payload: authors }) );
}
