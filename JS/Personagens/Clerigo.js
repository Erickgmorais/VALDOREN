"use strict";
// personagme que mais vai ter ouro porque a igreja rouba de nós 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clerigo = void 0;
const Personagem_1 = require("./Personagem");
class Clerigo extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Clerigo', 100, 10, 8, 50, 50);
    }
    usarAtaqueEspecial() {
        return 0;
    }
}
exports.Clerigo = Clerigo;
