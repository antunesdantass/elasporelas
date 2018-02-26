export class Course {
    imagem: string;
    nome: string;
    valor: number;
    teacher: string;
    matriculas: string[];

    constructor() {
        this.matriculas = new Array();
    }
}