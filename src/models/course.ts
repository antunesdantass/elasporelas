import { User } from "./user";

export class Course {
    imagem: string;
    nome: string;
    valor: number;
    teacher: string;
    matriculas: User[];
    descricao: string;
    endereco: string;

    constructor() {
        this.matriculas = new Array();
    }
}