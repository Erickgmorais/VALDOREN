"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berserker = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Berserker extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Berserker', 150, 12, 5, 25, 30);
    }
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 500;
        if (!this.usouAtaqueEspecial) {
            (0, Auxiliares_1.consoleEspecial)();
            (0, Cores_1.blue)(`A dor não me enfraquece... ELA ME TORNA MAIS FORTE! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            inimigo.tomarDano(danoFinal);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Berserker = Berserker;
