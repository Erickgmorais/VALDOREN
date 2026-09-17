"use strict";
// Não tira vidas, usa tecnicas para incapacitar inimigos. Podemos pensar nessa ideia, que, caso escolha
//ele não poderá tirar vidas. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavaleiro = void 0;
const Personagem_1 = require("./Personagem");
class Cavaleiro extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Cavaleiro', 120, 18, 20, 15, 30);
    }
    usarAtaqueEspecial() {
        return 0;
    }
}
exports.Cavaleiro = Cavaleiro;
