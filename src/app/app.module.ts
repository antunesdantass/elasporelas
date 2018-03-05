import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CourseListComponent } from '../pages/course-list/course-list.component';
import { CourseDetail } from '../pages/course/course.page';
import { LoginPage } from "../pages/login/login.page"; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourseProvider } from '../providers/course/course-provider';
import { LoginProvider } from "../providers/authentication/login.provider";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CourseListComponent,
    LoginPage,
    CourseDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CourseListComponent,
    CourseDetail,
    LoginPage
  ],
  providers: [
    LoginProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CourseProvider
    ]
})
export class AppModule {}
