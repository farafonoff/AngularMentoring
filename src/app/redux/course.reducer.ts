import { Course } from '../model/course.model';
import { Action } from '@ngrx/store';

import * as _ from 'lodash';

export const COURSE_OPEN = 'COURSE_OPEN';
export const COURSE_NEW = 'COURSE_NEW';
export const COURSE_LOAD_SUCCESS = 'COURSE_LOAD_SUCCESS';
export const COURSE_NOT_FOUND = 'COURSE_NOT_FOUND';
export const COURSE_SAVE = 'COURSE_SAVE';
export const COURSE_SAVED = 'COURSE_SAVED';

export class CourseState {
    course: Course = new Course();
    isNew = true;
}

export interface ActionP extends Action {
    payload: any;
}

export function courseReducer(state: CourseState = new CourseState(), action: ActionP): CourseState {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case COURSE_NEW:
            return {...state, course: new Course(), isNew: true };
        case COURSE_LOAD_SUCCESS:
            return {...state, course: action.payload, isNew: false };
        case COURSE_SAVE:
            const course = action.payload;
            course.id = state.course.id;
            return {...state, course };
        default:
            return state;
    }
}
