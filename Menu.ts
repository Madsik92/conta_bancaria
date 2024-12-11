import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    // Cria novas instancias (objetos) da classe conta
    const c1 = new Conta(1, 123, 1, "Jonas", 100000);
    c1.visualizar();
    // saque
    console.log(c1.sacar(100.00));
    c1.visualizar();

    const c2 = new Conta(2, 123, 2, "Aline", 200000);
    c2.visualizar();
    // deposito
    c2.depositar(100.00);
    c2.visualizar();

    do {
        menu()

        opcao = readlinesync.questionInt();

        if (opcao == 9) {
            about()
            process.exit(0)
        }


        switch (opcao) {
            case 1:
                console.log('Criar Conta');
                break;

            case 2:
                console.log('Listar todas as Contas');
                break;

            case 3:
                console.log('Buscar Conta por Numero');
                break;

            case 4:
                console.log('Atualizar Dados da Conta');
                break;

            case 5:
                console.log('Apagar Conta');
                break;

            case 6:
                console.log('Sacar');
                break;

            case 7:
                console.log('Depositar');
                break;

            case 8:
                console.log('Transferir valores entre Contas');
                break;

            default:
                console.log("Opcao Invalida")


        }

    } while (true);
}

function menu(): void {

    console.log(colors.fg.greenstrong,"=====================================================");
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

function about() {
    console.log("Criado por Jessica")
}

main();