import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../../components/course/course.component';
import { NavController } from 'ionic-angular';
import { Course } from '../../models/course';
import { CourseProvider } from '../../providers/course/course-provider';
import { CourseDetail } from '../course/course.page';

@Component({
    templateUrl: './course-list.html'
})
export class CourseListComponent implements OnInit {
    courses;

    constructor(public navCtrl: NavController, private courseProvider : CourseProvider) {}

    ngOnInit() {
        this.courseProvider.getCourses().then(data => {
            this.courses = data;
        });
    };

    goToCourse(course: Course): void {
        this.navCtrl.push(CourseDetail, {course: course});
    };

    ionViewWillEnter() {
        this.courseProvider.getCourses().then(data => this.courses = data)
    }


}