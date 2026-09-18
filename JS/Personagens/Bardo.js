"use strict";
// Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver.
// no final da história ele é o vilão (tendencia)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bardo = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Bardo extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Bardo', 150, 18, 8, 50, 40);
    }
    usarAtaqueEspecial(inimigo) {
        const danoFinal = this.ataque + 500;
        if (!this.usouAtaqueEspecial) {
            (0, Auxiliares_1.consoleEspecial)();
            inimigo.tomarDano(danoFinal);
            (0, Cores_1.blue)(`Que a minha melodia desperte o poder que repousa em minha alma! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial(); // Seta o especial = true
            return danoFinal;
        }
        return danoFinal;
    }
}
exports.Bardo = Bardo;
/** COMENTÁRIOS
 * Deixamos personagens como o "Bardo" pré definido já, ou damos a opção do usuário criar um "Bardo" do jeito que ele quiser? E
 * Acredito que podemos deixar o nome apenas 'Livre', o resto, ja podemos pré definir, igual o sor pediu no projeto, O que acha? J
 * Mudei um pouco a classe dos personagens no inventário. Vamos dar uma olhada juntos depois J
 * (Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver E) Como assim
 */
