import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(
        numero: number,
        agencia: number,
        tipo: number,
        titular: string,
        saldo: number,
        limite: number
    ) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }


    public get limite(): number {
        return this._limite;
    }


    public set limite(value: number) {
        this._limite = value;
    }

    // Particularidade de Conta Corrente
    public sacar(valor: number): boolean {

        if (valor > this.saldo + this._limite) {
            console.log(colors.fg.red, "\n Saldo Insuficiente!\n", colors.reset);
            return false;
        }

        this.saldo -= valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.green, `Limite da Conta: ${this._limite}`, colors.reset)
        console.log('\n')
    }
}