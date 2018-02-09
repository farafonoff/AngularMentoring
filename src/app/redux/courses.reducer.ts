import { Course } from "../model/course.model";
import { Action } from "@ngrx/store";

import * as _ from 'lodash';

export const COURSES_OPEN = 'COURSES_OPEN';
export const COURSES_NEXT_PAGE = 'COURSES_OPEN';
export const COURSES_PREV_PAGE = 'COURSES_PREV_PAGE';
export const COURSES_LOAD_SUCCESS = 'COURSES_LOAD_SUCCESS';

export class CoursesState {
    start = 0;
    pageSize = 0;
    data: Course[];    
}

export interface ActionP extends Action {
    payload: any;
}

export function courseReducer(state: CoursesState, action: ActionP) {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case COURSES_OPEN: {
            break;
        }
        case COURSES_NEXT_PAGE: {
            break;
        }
        case COURSES_PREV_PAGE: {
            break;
        }
    }
    return newState;
}