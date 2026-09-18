"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavaleiro = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Cavaleiro extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Cavaleiro', 100, 18, 18, 15, 30);
    }
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 500;
        if (!this.usouAtaqueEspecial) {
            (0, Auxiliares_1.consoleEspecial)();
            inimigo.tomarDano(danoFinal);
            (0, Cores_1.blue)(`Pela honra e pelo meu juramento, nenhum inimigo permanecerá de pé! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Cavaleiro = Cavaleiro;
