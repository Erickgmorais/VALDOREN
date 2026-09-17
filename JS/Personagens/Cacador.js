"use strict";
// jogador com o maior ataque!
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cacador = void 0;
const Personagem_1 = require("./Personagem");
class Cacador extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Cacador', 85, 25, 12, 20, 15);
    }
    usarAtaqueEspecial() {
        return 0;
    }
}
exports.Cacador = Cacador;
