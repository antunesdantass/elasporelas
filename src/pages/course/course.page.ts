import { Component } from "@angular/core";
import { Course } from "../../models/course";
import { NavParams } from "ionic-angular";

@Component({
    templateUrl: 'course.page.html'
})
export class CourseDetail {
    course: Course;

    constructor(private navParams: NavParams) {
        this.course = navParams.get("course");
    }
}