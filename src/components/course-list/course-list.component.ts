import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { NavController } from 'ionic-angular';
import { Course } from '../../models/course';

@Component({
    templateUrl: './course-list.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[];

    constructor(public navCtrl: NavController, private ) {}

    ngOnInit() {

    }
}