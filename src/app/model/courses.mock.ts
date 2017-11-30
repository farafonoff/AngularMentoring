import { Course } from './course.model';

export function Courses(): Course[] {
    const result = [];
    for (let i = 0; i < 10; ++i) {
        const course = new Course();
        course.id = i;
        course.createDate = new Date();
        course.name = `Course${i}`;
        result.push(course);
    }
    return result;
}
