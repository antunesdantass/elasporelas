import { Injectable, OnInit } from "@angular/core";
import { Course } from '../../models/course';

@Injectable()
export class CourseProvider {

    getCourses() {
        const promise = new Promise((resolve, reject) => {
            resolve(this.getMock().concat(JSON.parse(localStorage.getItem("courses")) || new Array()));
        });

        return promise;
    }

    addCourse(course: Course) {
        const cursosNovos = JSON.parse(localStorage.getItem("courses")) || new Array();
        cursosNovos.push(course);
        localStorage.setItem("courses", JSON.stringify(cursosNovos));
    }

    getMock() {
        const informatica = new Course();
        informatica.nome = "Informática";
        informatica.valor = 50;
        informatica.imagem = "assets/imgs/informatica.jpg";
        informatica.teacher = "Gilza";

        const cabeleleira = new Course();
        cabeleleira.nome = "Cabelereira";
        cabeleleira.valor = 20;
        cabeleleira.imagem = "assets/imgs/cabelereira.jpg";
        cabeleleira.teacher = "Maria";

        const culinaria = new Course();
        culinaria.nome = "Culinária";
        culinaria.valor = 25;
        culinaria.imagem = "assets/imgs/culinaria.jpg";
        culinaria.teacher = "Elaine";

        return [informatica, cabeleleira, culinaria];
    }

}