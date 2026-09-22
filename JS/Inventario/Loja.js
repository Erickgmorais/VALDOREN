"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loja = loja;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Armadura_1 = require("./Armadura");
const ask = require('readline-sync');
function loja(personagem) {
    let option;
    let sairLoop = false;
    while (!sairLoop) {
        (0, Auxiliares_1.clear)();
        if (personagem.getOuro() > 0) {
            (0, Cores_1.yellow)(`
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
                    (0, Auxiliares_1.clear)();
                    (0, Cores_1.yellow)(`SEU OURO: ${personagem.getOuro()}`);
                    (0, Auxiliares_1.lojaMostrarArmaduras)();
                    option = Number(ask.question());
                    switch (option) {
                        case 1:
                            if (personagem.getOuro() >= 25) {
                                personagem.adicionaInventario(new Armadura_1.Armadura('Armadura de Couro', 5));
                                personagem.setDefesa(5);
                                personagem.setOuro(-25);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Armadura de Couro comprada! +5 de defesa`);
                                (0, Cores_1.red)(`-25 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa armadura!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 2:
                            if (personagem.getOuro() >= 50) {
                                personagem.adicionaInventario(new Armadura_1.Armadura('Cota de Malha', 10));
                                personagem.setDefesa(10);
                                personagem.setOuro(-50);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Cota de Malha comprada! +10 de defesa`);
                                (0, Cores_1.red)(`-25 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa armadura!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 3:
                            if (personagem.getOuro() >= 85) {
                                personagem.adicionaInventario(new Armadura_1.Armadura('Armadura de Aço', 20));
                                personagem.setDefesa(20);
                                personagem.setOuro(-85);
                                (0, Auxiliares_1.clear)();
                                (0, Cores_1.blue)(`Armadura de Aço comprada! +20 de defesa!`);
                                (0, Cores_1.red)(`-25 DE OURO!`);
                                (0, Auxiliares_1.stop)();
                            }
                            else {
                                (0, Cores_1.red)(`Sem dinheiro suficiente para comprar essa armadura!`);
                                (0, Auxiliares_1.stop)();
                            }
                            break;
                        case 4: // Voltar pro Menu. não faz nada
                            break;
                        default:
                            (0, Cores_1.red)(`Opção inválida!`);
                            (0, Auxiliares_1.stop)();
                    }
                    break;
                case 2: // Melhorar arma
                    (0, Auxiliares_1.clear)();
                    (0, Auxiliares_1.lojaMostrarUpArma)();
                    break;
                case 3: // Poções
                    break;
                case 4: // Sair loja
                    sairLoop = true;
                    break;
                default:
                    break;
            }
        }
        else {
            (0, Cores_1.yellow)(`
    ╔══════════════════════════════════════╗
    ║        ARMAZEM DO ELFO LUCIO         ║
    ╠══════════════════════════════════════╣
    ║  Me parece que seu ouro acabou...    ║
    ║                                      ║
    ║  Volte em outro momento para que     ║
    ║  possamos fazer negócios!            ║
    ╚══════════════════════════════════════╝

    `);
            (0, Auxiliares_1.stop)();
            sairLoop = true;
        } // final IF
    } // Final LOOP
} // Final Método
