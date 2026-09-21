"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Arma_1 = require("../Inventario/Arma");
const Personagem_1 = require("./Personagem");
class Mago extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Mago', 120, 25, 2, 40, 30);
        this.inventario.push(new Arma_1.Arma('Cajado Arcano', 10));
    }
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 200;
        if (!this.usouAtaqueEspecial) {
            (0, Auxiliares_1.consoleEspecial)();
            (0, Cores_1.blue)(`
As forças arcanas respondem ao meu chamado... prepare-se para ser consumido! 
ATAQUE AUMENTADO EM 200!`);
            inimigo.tomarDano(danoFinal);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Mago = Mago;
