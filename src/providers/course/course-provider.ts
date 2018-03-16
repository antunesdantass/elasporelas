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

    getCoursesByTeacher(email: string) {
        const courses = JSON.parse(localStorage.getItem("courses"));
        const filtrados = courses.filter(course => course.teacher === email);
        const promise = new Promise((resolve, reject) => {
            resolve(filtrados);
        });

        return promise;
    }

    addCourse(course: Course) {
        const cursosNovos = JSON.parse(localStorage.getItem("courses")) || new Array();
        cursosNovos.push(course);
        localStorage.setItem("courses", JSON.stringify(cursosNovos));
    }

    updateCourse(course: Course) {
        let courses = JSON.parse(localStorage.getItem("courses"));
        const index = courses.findIndex(element => element.nome === course.nome);
        if (index > -1) {
            courses[index] = course;
            localStorage.setItem("courses", JSON.stringify(courses));
        }
    }

    getMock() {
        const informatica = new Course();
        informatica.nome = "Informática";
        informatica.valor = 50;
        informatica.imagem = "assets/imgs/informatica.jpg";
        informatica.teacher = "gilza@ufcg.com";

        const cabeleleira = new Course();
        cabeleleira.nome = "Cabelereira";
        cabeleleira.valor = 20;
        cabeleleira.imagem = "assets/imgs/cabelereira.jpg";
        cabeleleira.teacher = "maria@ufcg.com";

        const culinaria = new Course();
        culinaria.nome = "Culinária";
        culinaria.valor = 25;
        culinaria.imagem = "assets/imgs/culinaria.jpg";
        culinaria.teacher = "elaine@ufcg.com";

        return [informatica, cabeleleira, culinaria];
    }

}