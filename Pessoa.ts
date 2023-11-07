class Pessoa {

    constructor(
        private id: number,
        private nome: string,
        private cpf: string,
        private genero: string,
        private data_nascimento: string,
        private email: string,
        private endereco: string,
    ) { }

    excluir() {
        console.log(`Pessoa excluida: ${this.nome}`);
    }

    getNome() {
        return this.nome;
    }

    getInfo() {
        console.log('Dados da Pessoa:')
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data Nascimento: ${this.data_nascimento}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Endereço: ${this.endereco}`);
    }
}

export default Pessoa;