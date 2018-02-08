import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export const AUTH_STORAGE_KEY = 'auth_token';

@Injectable()
export class HttpAuthorized extends Http {
    constructor(backend: XHRBackend, options: RequestOptions) {
        const token = localStorage.getItem(AUTH_STORAGE_KEY); // your custom token getter function here
        options.headers.set('Authorization', token);
        super(backend, options);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        const token = localStorage.getItem(AUTH_STORAGE_KEY);
        if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
            if (!options) {
                // let's make option object
                options = { headers: new Headers() };
            }
            options.headers.set('Authorization', token);
        } else {
            // we have to add the token to the url object
            url.headers.set('Authorization', token);
        }
        return super.request(url, options);
    }
}
