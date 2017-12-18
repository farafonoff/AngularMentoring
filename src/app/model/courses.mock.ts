import { Course } from './course.model';

export function fakeCourses(): Course[] {
    const result = [];
    for (let i = 0; i < 30; ++i) {
        const dd = new Date();
        dd.setDate(dd.getDate() + 2 - i);
        const course = new Course(
            i,
            `Course${i}`,
            dd,
            Math.round(Math.random() * 240),
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id velit ac nulla ultricies efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula lectus, fringilla sed accumsan pulvinar, iaculis et tellus. Ut eget fringilla nunc. Etiam felis ligula, ornare vehicula elit ut, blandit ullamcorper lorem. Ut tincidunt mattis nisi eget varius. Integer euismod faucibus nunc ac interdum. Aliquam congue fermentum ligula vel scelerisque. Suspendisse sagittis, lectus sit amet faucibus tempor, tellus ante tristique ligula, non fermentum augue nisi hendrerit sem. Sed mi arcu, volutpat sed purus nec, tempus lacinia justo.`,
            i % 3 === 1 /* top Rated */
        );
        result.push(course);
    }
    return result;
}
