import { Course, CourseFake } from './course.model';
import * as moment from 'moment';

export function fakeCourses(): CourseFake[] {
    const result = [];
    for (let i = 0; i < 30; ++i) {
        const date = moment().subtract(i - 2, 'days');
        console.log(date.fromNow());
        const course = new CourseFake(
            i,
            `Course${i}`,
            date.toDate(),
            Math.round(Math.random() * 240),
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id velit ac nulla ultricies efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula lectus, fringilla sed accumsan pulvinar, iaculis et tellus. Ut eget fringilla nunc. Etiam felis ligula, ornare vehicula elit ut, blandit ullamcorper lorem. Ut tincidunt mattis nisi eget varius. Integer euismod faucibus nunc ac interdum. Aliquam congue fermentum ligula vel scelerisque. Suspendisse sagittis, lectus sit amet faucibus tempor, tellus ante tristique ligula, non fermentum augue nisi hendrerit sem. Sed mi arcu, volutpat sed purus nec, tempus lacinia justo.`,
            i % 3 === 1 /* top Rated */
        );
        result.push(course);
    }
    return result;
}
