import { Component } from '@angular/core';

import { CourseListComponent } from '../course-list/course-list.component';
import { Profile } from '../profile/profile.component';
import { CreateCourse } from '../create-course/create-course.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Profile;
  tab2Root = CourseListComponent;
  tab3Root = CreateCourse;

  constructor() {

  }
}