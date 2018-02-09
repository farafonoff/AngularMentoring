import { Course } from "../model/course.model";
import { Action } from "@ngrx/store";

import * as _ from 'lodash';

export const COURSES_OPEN = 'COURSES_OPEN';
export const COURSES_SEARCH = 'COURSES_SEARCH';
export const COURSE_DELETE = 'COURSE_DELETE';
export const COURSES_NEXT_PAGE = 'COURSES_NEXT_PAGE';
export const COURSES_PREV_PAGE = 'COURSES_PREV_PAGE';
export const COURSES_LOAD_SUCCESS = 'COURSES_LOAD_SUCCESS';

export class CoursesState {
    prevStart = 0;
    start = 0;
    hasMore = true;
    hasLess = false;
    pageSize = 10;
    search = '';
    data: Course[];    
}

export interface ActionP extends Action {
    payload: any;
}

export function courseReducer(state: CoursesState = new CoursesState(), action: ActionP): CoursesState {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case COURSES_OPEN: {
/*            newState.start = 0;
            newState.prevStart = 0;
            newState.hasLess = false;
            newState.hasMore = true;*/
            break;
        }
        case COURSES_NEXT_PAGE: {
            newState.prevStart = state.start;
            newState.start += state.pageSize;
            break;
        }
        case COURSES_PREV_PAGE: {
            if (state.start > 0) {
                newState.prevStart = state.start;
                newState.start -= state.pageSize;    
            }
            break;
        }
        case COURSES_SEARCH: {
            newState.search = action.payload;
            newState.data = [];
            break;
        }
        case COURSES_LOAD_SUCCESS: {
            newState.hasLess = state.start > 0;
            if (action.payload.length === state.pageSize) {
                newState.hasMore = true;
                newState.data = action.payload;
            } else if (action.payload.length === 0) {
                newState.hasMore = false;
                newState.start = newState.prevStart;                             
            } else {
                newState.hasMore = false;
                newState.data = action.payload;
            }
            break;
        }
        default: 
            return state;
    }
    return newState;
}