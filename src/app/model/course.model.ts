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
        public id: number,
        public name: string,
        public createDate: Date,
        public durationMinutes: number,
        public description: string,
        public topRated: boolean
    ) {

    }
}
