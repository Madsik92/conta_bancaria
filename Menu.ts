import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaControlle";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    // Criando um objeto da classe contaController
    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

    while (true) {
        menu()

        opcao = readlinesync.questionInt();

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nFolk'or Bank: Sabedoria financeira para um futuro sólido.");
            about();
            console.log(colors.reset, "");
            process.exit(0);
        }


        switch (opcao) {
            case 1:
                console.log('\n\n Criar Conta\n\n');

                console.log('Digite o Numero da Agencia: ');
                agencia = readlinesync.questionInt('');

                console.log('Digite o Nome do Titular: ');
                titular = readlinesync.question('');

                console.log('Escolha o Tipo da Conta: ');
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log('Digite o Saldo da Conta: ');
                saldo = readlinesync.questionFloat('');

                switch (tipo) {
                    case 1:
                        console.log('Digite o Limite da Conta: ');
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))

                        break;
                    case 2:
                        console.log('Digite o Aniversario da Poupanca: ');
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))

                        break;
                }

                keyPress()
                break;

            case 2:
                console.log('\n\n Listar todas as Contas\n\n');
                contas.listarTodas();

                keyPress()
                break;

            case 3:
                console.log('\n\n Buscar Conta por Numero\n\n');
                console.log(" Digite o Numero da Conta: ");
                numero = readlinesync.questionInt('');

                contas.procurarPorNumero(numero);

                keyPress()
                break;

            case 4:
                console.log('\n\n Atualizar Dados da Conta\n\n');

                keyPress()
                break;

            case 5:
                console.log('\n\n Apagar Conta\n\n');

                keyPress()
                break;

            case 6:
                console.log('\n\n Sacar\n\n');

                keyPress()
                break;

            case 7:
                console.log('\n\n Depositar\n\n');

                keyPress()
                break;

            case 8:
                console.log('\n\n Transferir valores entre Contas\n\n');

                keyPress()
                break;

            default:
                console.log("\n\n Opcao Invalida\n\n")


        }

    }
}

function menu(): void {

    console.log(colors.fg.greenstrong,
        "===================================================== ");
    console.log("                    FOLK'OR BANK                      ");
    console.log(" -----------------------------------------------------");
    console.log("                                                      ");
    console.log("        1 - Criar Conta                               ");
    console.log("        2 - Listar todas as Contas                    ");
    console.log("        3 - Buscar conta por Numero                   ");
    console.log("        4 - Atualizar Dados da Conta                  ");
    console.log("        5 - Apagar Conta                              ");
    console.log("        6 - Sacar                                     ");
    console.log("        7 - Depositar                                 ");
    console.log("        8 - Transferir valores entre Contas           ");
    console.log("        9 - Sair                                      ");
    console.log("                                                      ");
    console.log(" =====================================================");
    console.log("\n Entre com a opcao desejada:", colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

function about() {
    console.log("Criado por Jessica")
}

main();

