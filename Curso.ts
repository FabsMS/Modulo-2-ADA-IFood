class Curso {

    private codigo_curso: number;
    private nome: string;
    private carga_horaria: string;

    constructor(
        codigo_curso: number,
        nome: string,
        carga_horaria: string
    ) {
        this.codigo_curso = codigo_curso;
        this.nome = nome;
        this.carga_horaria = carga_horaria;
    }

    getInfo() {
        console.log('Dados do Curso')
        console.log(`Código do curso: ${this.codigo_curso}`);
        console.log(`Nome do curso: ${this.nome}`);
        console.log(`Carga horaria: ${this.carga_horaria}`);
    }

}

export default Curso;