"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berserker = void 0;
const Personagem_1 = require("./Personagem");
class Berserker extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Berserker', 130, 35, 5, 25, 30);
    }
    usarAtaqueEspecial() {
        return 0;
    }
}
exports.Berserker = Berserker;
