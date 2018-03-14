export class Course {
    imagem: string;
    nome: string;
    valor: number;
    teacher: string;
    matriculas: string[];
    descricao: string;
    endereco: string;

    constructor() {
        this.matriculas = new Array();
    }
}