import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CourseListComponent;
  tab3Root = HomePage;

  constructor() {

  }
}