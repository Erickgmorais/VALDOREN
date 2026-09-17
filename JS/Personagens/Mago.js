"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personagem_1 = require("./Personagem");
class Mago extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Mago', 85, 25, 12, 40, 30);
    }
    usarAtaqueEspecial() {
        return 0;
    }
}
exports.Mago = Mago;
