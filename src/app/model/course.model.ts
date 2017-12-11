export class Course {
    constructor(
        public id: number,
        public name: string,
        public createDate: Date,
        public durationSeconds: number,
        public description: string
    ) {

    }
}
