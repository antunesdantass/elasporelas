import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { TabsPage } from '../pages/tabs/tabs';
import { CourseListComponent } from '../pages/course-list/course-list.component';
import { CourseDetail } from '../pages/course/course.page';
import { LoginPage } from "../pages/login/login.page";
import { Register } from '../pages/register/register.page';
import { CreateCourse } from '../pages/create-course/create-course.page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourseProvider } from '../providers/course/course-provider';
import { LoginProvider } from "../providers/authentication/login.provider";
import { Profile } from '../pages/profile/profile.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CourseListComponent,
    LoginPage,
    CourseDetail,
    Register,
    Profile,
    CreateCourse
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CourseListComponent,
    CourseDetail,
    LoginPage,
    Register,
    Profile,
    CreateCourse
  ],
  providers: [
    LoginProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CourseProvider,
    Camera
    ],
})
export class AppModule {}
