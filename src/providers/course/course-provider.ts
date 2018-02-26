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
        informatica.imagem = "../../assets/imgs/informatica.jpg";
        informatica.teacher = "Gilza";

        const cabeleleira = new Course();
        cabeleleira.nome = "Cabelereira";
        cabeleleira.valor = 20;
        cabeleleira.imagem = "../../assets/imgs/cabelereira.jpg";
        cabeleleira.teacher = "Maria";

        const culinaria = new Course();
        culinaria.nome = "Encanadora";
        culinaria.valor = 25;
        culinaria.imagem = "../../assets/imgs/culinaria.jpg";
        culinaria.teacher = "Elaine";

        return [informatica, cabeleleira, culinaria];
    }

}