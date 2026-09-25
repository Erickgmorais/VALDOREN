"use strict";
// jogador com o maior ataque!
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cacador = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Arma_1 = require("../Inventario/Arma");
const Personagem_1 = require("./Personagem");
class Cacador extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Cacador', 120, 25, 5, 100, 15);
        this.inventario.push(new Arma_1.Arma('Arco Elfico', 10));
    }
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 200;
        if (!this.usouAtaqueEspecial) {
            (0, Auxiliares_1.consoleEspecial)();
            (0, Cores_1.blue)(`Você pode tentar fugir... mas minha flecha sempre encontra seu alvo! ATAQUE AUMENTADO EM 200!`);
            inimigo.tomarDano(danoFinal);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Cacador = Cacador;
