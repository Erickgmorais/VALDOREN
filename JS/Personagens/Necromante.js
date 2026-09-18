"use strict";
// essa classe tem um método que, durante um ataque, ele pode dar um dano absurdo que com certeza irá matar o inimigo
Object.defineProperty(exports, "__esModule", { value: true });
exports.Necromante = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Necromante extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Necromante', 130, 20, 10, 60, -30);
    }
    // método especial de ataque subscrito 
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 500;
        if (!this.usouAtaqueEspecial) {
            inimigo.tomarDano(danoFinal);
            (0, Auxiliares_1.consoleEspecial)();
            (0, Cores_1.blue)(`OS CADÁVERES SE ERGUEM E AVANÇAM SOBRE ${inimigo.getNome()}! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Necromante = Necromante;
/** comentários
 * tem habilidade auxiliar de chamar cadáveres para ajudar ele no combate contra inimigos
 *
 */ 
