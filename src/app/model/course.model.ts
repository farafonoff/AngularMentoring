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
