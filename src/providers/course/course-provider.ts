import { Injectable } from "@angular/core";
import { Course } from '../../models/course';

@Injectable()
export class CourseProvider {

    getCourses() {
        const promise = new Promise((resolve, reject) => {
            resolve(this.getMock());
        });

        return promise;
    }

    getMock() {
        const informatica = new Course();
        informatica.nome = "Informática";
        informatica.valor = 50;

        const cabeleleira = new Course();
        cabeleleira.nome = "Cabelereira";
        cabeleleira.valor = 20;

        const encanadora = new Course();
        encanadora.nome = "Encanadora";
        encanadora.valor = 25;

        return [informatica, cabeleleira, encanadora];
    }

}