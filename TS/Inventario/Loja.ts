import { clear, lojaMostrarArmaduras, lojaMostrarUpArma, stop } from "../Auxiliares/Auxiliares";
import { blue, red, yellow } from "../Auxiliares/Cores";
import { Personagem } from "../Personagens/Personagem";
import { Armadura } from "./Armadura";

const ask = require('readline-sync');

export function loja(personagem: Personagem): void {

    let option: number;
    let sairLoop: boolean = false;


    while (!sairLoop) {

        clear()
        if (personagem.getOuro() > 0) {

            yellow(`
        ╔══════════════════════════════════════╗
        ║        ARMAZEM DO ELFO LUCIO         ║
        ╠══════════════════════════════════════╣
        ║  Bem-vindo, aventureiro!             ║
        ║  Em que posso te ajudar?             ║
        ╠══════════════════════════════════════╣
        ║  1 - Ver equipamentos                ║
        ║  2 - Melhorar arma                   ║
        ║  3 - Poções                          ║
        ║  4 - Sair da loja                    ║
        ╚══════════════════════════════════════╝
            `);

            option = Number(ask.question());

            switch (option) {

                case 1: // Ver equipamentos OK

                    clear();

                    yellow(`SEU OURO: ${personagem.getOuro()}`);

                    lojaMostrarArmaduras();
                    option = Number(ask.question());

                    switch (option) {
                        case 1:
                            if (personagem.getOuro() >= 25) {

                                personagem.adicionaInventario(new Armadura('Armadura de Couro', 5))
                                personagem.setDefesa(5);
                                personagem.setOuro(-25);

                                clear()
                                blue(`Armadura de Couro comprada! +5 de defesa`)
                                red(`-25 DE OURO!`)
                                stop();

                            } else {
                                clear();
                                red(`Sem dinheiro suficiente para comprar essa armadura!`);
                                stop();
                            }
                            break;

                        case 2:

                            if (personagem.getOuro() >= 50) {

                                personagem.adicionaInventario(new Armadura('Cota de Malha', 10))
                                personagem.setDefesa(10);
                                personagem.setOuro(-50);

                                clear()
                                blue(`Cota de Malha comprada! +10 de defesa`)
                                red(`-25 DE OURO!`)
                                stop();

                            } else {
                                clear();
                                red(`Sem dinheiro suficiente para comprar essa armadura!`);
                                stop();
                            }
                            break;

                        case 3:

                            if (personagem.getOuro() >= 85) {

                                personagem.adicionaInventario(new Armadura('Armadura de Aço', 20))
                                personagem.setDefesa(20);
                                personagem.setOuro(-85);

                                clear()
                                blue(`Armadura de Aço comprada! +20 de defesa!`)
                                red(`-25 DE OURO!`)
                                stop();

                            } else {
                                red(`Sem dinheiro suficiente para comprar essa armadura!`);
                                stop();
                            }

                            break;

                        case 4: // Voltar pro Menu. não faz nada
                            break;

                        default:
                            red(`Opção inválida!`);
                            stop();
                    }

                    break;

                case 2: // Melhorar arma

                    clear()
                    lojaMostrarUpArma();

                    break;

                case 3: // Poções

                    break;

                case 4: // Sair loja
                    sairLoop = true;
                    break;

                default:
                    break;

            }
        } else {
            yellow(`
    ╔══════════════════════════════════════╗
    ║        ARMAZEM DO ELFO LUCIO         ║
    ╠══════════════════════════════════════╣
    ║  Me parece que seu ouro acabou...    ║
    ║                                      ║
    ║  Volte em outro momento para que     ║
    ║  possamos fazer negócios!            ║
    ╚══════════════════════════════════════╝

    `);
            stop();
            sairLoop = true;
            
        } // final IF
    } // Final LOOP
} // Final Método