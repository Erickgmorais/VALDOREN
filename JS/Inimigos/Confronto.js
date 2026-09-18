"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciarConfronto = iniciarConfronto;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const ask = require('readline-sync');
function iniciarConfronto(personagem, inimigo) {
    (0, Cores_1.purple)(`O confronto entre ${personagem.getNome()} e ${inimigo.getNome()} comecou!`);
    (0, Auxiliares_1.stop)();
    let finalConfronto = false;
    let option;
    while (!finalConfronto) {
        if (personagem.getVida() > 0) {
            if (inimigo.getVida() > 0) {
                (0, Auxiliares_1.clear)();
                (0, Auxiliares_1.escolhasCombate)(personagem);
                option = Number(ask.question());
                switch (option) {
                    case 1: // atacar
                        (0, Auxiliares_1.clear)();
                        personagem.atacar(inimigo);
                        (0, Auxiliares_1.stop)();
                        inimigo.atacar(personagem);
                        break;
                    case 2: // Abrir inventário
                        personagem.mostrarInventario();
                        option = Number(ask.question());
                        switch (option) {
                            case 1:
                                const pocao = personagem.escolherPocao();
                                if (pocao !== null) {
                                    personagem.tomarPocao(pocao);
                                    (0, Auxiliares_1.stop)();
                                }
                                break;
                        }
                        break;
                    case 3: // usar especial e setar o useiEspecial true
                        (0, Auxiliares_1.clear)();
                        personagem.usarAtaqueEspecial(inimigo); // inimigo com certeza vai morrer
                        (0, Auxiliares_1.stop)();
                        break;
                    default:
                        (0, Cores_1.red)('Opcao inválida');
                        (0, Auxiliares_1.stop)();
                        break;
                }
            }
            else {
                (0, Auxiliares_1.clear)();
                (0, Auxiliares_1.inimigoDerrotado)(); // Arte de inimigo derrotado
                finalConfronto = true;
                (0, Auxiliares_1.stop)();
            }
        }
        else {
            (0, Auxiliares_1.clear)();
            (0, Auxiliares_1.morreu)(); // Arte de morte
            process.exit();
        }
    }
}
