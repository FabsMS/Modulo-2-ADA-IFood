import Professor from "./Professor";
import Aluno from "./Aluno";
import Curso from "./Curso";

export default class Oferta {

    // Atributos, Informações, Dados, Propriedades
    private codigo_oferta: number;
    private curso: Curso;
    private professor: Professor;
    private alunos: Aluno[];

    // Funcionalidades, Metodos, Ações
    constructor(
        codigo_oferta: number,
        curso: Curso,
        professor: Professor,
        alunos: Aluno[],
    ) {
        this.codigo_oferta = codigo_oferta;
        this.curso = curso;
        this.professor = professor;
        this.alunos = alunos;
    }

    excluir() {
        console.log(`Oferta excluida, código: ${this.codigo_oferta}`);
    }

    getInfo() {
        console.log(`Código: ${this.codigo_oferta}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`professor: ${this.professor}`);
        console.log(`alunos: ${this.alunos}`);
    }
}