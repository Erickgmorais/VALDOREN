"use strict";
// essa classe tem um método que, durante um ataque, ele pode dar um dano absurdo que com certeza irá matar o inimigo
Object.defineProperty(exports, "__esModule", { value: true });
exports.Necromante = void 0;
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Necromante extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Necromante', 130, 25, 5, 60, -30);
    }
    // método especial de ataque subscrito 
    usarAtaqueEspecial() {
        if (this.usouAtaqueEspecial) {
            return this.ataque + 500;
        }
        else {
            (0, Cores_1.red)('Voce já usou o ataque especial!');
            return this.ataque;
        }
    }
}
exports.Necromante = Necromante;
/** comentários
 * tem habilidade auxiliar de chamar cadáveres para ajudar ele no combate contra inimigos
 *
 */ 
