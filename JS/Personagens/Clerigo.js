"use strict";
// personagme que mais vai ter ouro porque a igreja rouba de nós 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clerigo = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Clerigo extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Clerigo', 100, 10, 20, 50, 50);
    }
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 500;
        if (!this.usouAtaqueEspecial) {
            (0, Auxiliares_1.consoleEspecial)();
            inimigo.tomarDano(danoFinal);
            (0, Cores_1.blue)(`Que a luz divina me envolva e expulse as trevas deste mundo! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Clerigo = Clerigo;
