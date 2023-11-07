import Curso from "./Curso";
import Pessoa from "./Pessoa";

class Professor extends Pessoa {

    private numero_registro: number;
    private cursos: Curso[];

    constructor(
        id: number,
        nome: string,
        cpf: string,
        genero: string,
        data_nascimento: string,
        email: string,
        endereco: string,
        numero_registro: number
    ) {
        super(id, nome, cpf, genero, data_nascimento, email, endereco);
        this.numero_registro = numero_registro
        this.cursos = []
    }

    excluir() {
        console.log(`Professor excluido, numero do registro: ${this.numero_registro}`);
    }

    alocar(curso: Curso) {
        this.cursos.push(curso)
    }

    desalocar(curso: Curso) {
        //falta implementar
    }

    getInfo() {
        console.log('Dados do Professor:')
        super.getInfo()
        console.log(`Numero de Registro: ${this.numero_registro}`);
        console.log(`Cursos: ${this.cursos}`);
    }

}

export default Professor;