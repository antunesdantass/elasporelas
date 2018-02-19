import { Component } from "@angular/core";
import { Course } from '../../models/course';

@Component({
    selector: 'course',
    templateUrl: './course.html'
})
export class CourseComponent {
    course: Course;

    constructor() {}
}