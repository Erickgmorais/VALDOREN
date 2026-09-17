"use strict";
// jogador com o maior ataque!
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cacador = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Cacador extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Cacador', 120, 25, 5, 20, 15);
    }
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 500;
        if (this.usouAtaqueEspecial) {
            (0, Auxiliares_1.consoleEspecial)();
            inimigo.tomarDano(danoFinal);
            (0, Cores_1.blue)(`Você pode tentar fugir... mas minha flecha sempre encontra seu alvo! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Cacador = Cacador;
