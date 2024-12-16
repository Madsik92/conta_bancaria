import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
    procurarPorTitular(titular: string): void {

        let buscaPorTitular = this.listaContas.filter(conta => 
            conta.titular.toUpperCase().includes(titular.toUpperCase())
        )
        buscaPorTitular.forEach(conta => conta.visualizar());
    }

    // Colecao Array que vai armazenar os objetos Conta

    private listaContas = new Array<Conta>();

    // Controlar automaticamente os numeros das Contas

    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log(colors.fg.red, "\nConta nao encontrada!", colors.reset)
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.greenstrong, "\nA Conta foi cadastrada com sucesso!", colors.reset)
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.greenstrong, "\nA conta foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nConta nao encontrada!", colors.reset)
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.greenstrong, "\nA conta foi Deletada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nConta nao encontrada!", colors.reset)
    }

    // Metodos Bancarios
    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor) === true)
                console.log(colors.fg.greenstrong, "\nO Saque foi efetuado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nConta nao encontrada!", colors.reset)
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log(colors.fg.greenstrong, "\nO Depósito foi efetuado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nConta nao encontrada!", colors.reset)
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor);
                console.log(colors.fg.greenstrong, "\nA Transferencia foi efetuada com sucesso!", colors.reset);
            }

        } else
            console.log(colors.fg.red, "\nConta de Origem e/ou conta de Destino nao foi encontrada!", colors.reset);
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