import { Course } from './course.model';

export function fakeCourses(): Course[] {
    const result = [];
    for (let i = 0; i < 10; ++i) {
        const course = new Course();
        course.id = i;
        course.createDate = new Date();
        course.name = `Course${i}`;
        course.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id velit ac nulla ultricies efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula lectus, fringilla sed accumsan pulvinar, iaculis et tellus. Ut eget fringilla nunc. Etiam felis ligula, ornare vehicula elit ut, blandit ullamcorper lorem. Ut tincidunt mattis nisi eget varius. Integer euismod faucibus nunc ac interdum. Aliquam congue fermentum ligula vel scelerisque. Suspendisse sagittis, lectus sit amet faucibus tempor, tellus ante tristique ligula, non fermentum augue nisi hendrerit sem. Sed mi arcu, volutpat sed purus nec, tempus lacinia justo.`;
        result.push(course);
    }
    return result;
}
