import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CourseProvider } from "../../providers/course/course-provider";
import { Course } from "../../models/course";
import { CreateCourse } from "../../pages/create-course/create-course.page";
import { LoginProvider } from "../../providers/authentication/login.provider";

@Component({
    templateUrl: "my-courses.page.html",
    providers: [LoginProvider]
})
export class MyCoursesPage {
    courses;

    constructor(public navCtrl: NavController, 
                private courseProvider : CourseProvider,
                private loginProvider: LoginProvider) {}

    ngOnInit() {
        this.courseProvider.getCoursesByTeacher(this.loginProvider.getLoggedUser().email)
            .then(data => this.courses = data)
    };

    goToCreateCourse(): void {
        this.navCtrl.push(CreateCourse);
    };

    ionViewWillEnter() {
        this.courseProvider.getCoursesByTeacher(this.loginProvider.getLoggedUser().email)
            .then(data => this.courses = data)
    }

}