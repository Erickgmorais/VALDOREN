"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paladino = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Paladino extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Paladino', 100, 15, 5, 30, 30);
    }
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 500;
        if (this.usouAtaqueEspecial) {
            (0, Auxiliares_1.consoleEspecial)();
            inimigo.tomarDano(danoFinal);
            (0, Cores_1.blue)(`Pela luz sagrada, meu juramento será cumprido e as trevas serão destruídas! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Paladino = Paladino;
