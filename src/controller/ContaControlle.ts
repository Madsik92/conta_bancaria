import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    // Colecao Array que vai armazenar os objetos Conta

    private listaContas = new Array<Conta>();

    // Controlar automaticamente os numeros das Contas

    public numero: number = 0;


    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log("\n Conta nao encontrada!")
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi cadastrada com sucesso!")
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("A conta foi atualizada com sucesso!");
        } else
            console.log("\n Conta nao encontrada!")
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("A conta foi Deletada com sucesso!");
        } else
            console.log("\n Conta nao encontrada!")
    }

    // Metodos Bancarios
    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if(buscaConta.sacar(valor) === true)
                console.log("O Saque foi efetuado com sucesso!");
        } else
            console.log("\n Conta nao encontrada!")
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log("O Depósito foi efetuado com sucesso!");
        } else
            console.log("\n Conta nao encontrada!")
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if(contaOrigem.sacar(valor) === true){
                contaDestino.depositar(valor);
                console.log("O Transferencia foi efetuado com sucesso!");
            }
                
        } else
            console.log("\n Conta de Origem e/ou conta de Destino nao foi encontrada!");
    }

    // Metodos Auxiliares

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }

}