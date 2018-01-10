export class CourseFake {
    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public durationMinutes: number,
        public description: string,
        public topRated: boolean
    ) {

    }
}

export class Course {
    constructor(
        public id: number = null,
        public name: string = '',
        public createDate: Date = new Date(),
        public durationMinutes: number = 0,
        public description: string = '',
        public topRated: boolean = false
    ) {

    }
}
