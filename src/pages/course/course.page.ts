import { Component } from "@angular/core";
import { Course } from "../../models/course";
import { AlertController, NavParams } from "ionic-angular";
import { LoginProvider } from "../../providers/authentication/login.provider";
import { User } from "../../models/user";
import { CourseProvider } from "../../providers/course/course-provider";

@Component({
    templateUrl: 'course.page.html',
    providers: [LoginProvider, CourseProvider]
})
export class CourseDetail {
    course: Course;

    constructor(private navParams: NavParams,
                private loginProvider: LoginProvider,
                private courseProvider: CourseProvider,
                public alertCtrl: AlertController) {
        this.course = navParams.get("course");
    }

    matricular(course: Course) {
        course.matriculas.push(this.loginProvider.getLoggedUser());
        this.courseProvider.updateCourse(course);

        let alert = this.alertCtrl.create({
            title: "Matriculada com Sucesso!",
            message: "Parabéns, realize o pagamento de R$ " + course.valor + " reais em: " + course.endereco,
            buttons: [{
                text: 'Ok',
            }]
        });
    }
}