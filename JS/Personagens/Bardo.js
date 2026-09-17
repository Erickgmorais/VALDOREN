"use strict";
// Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver.
// no final da história ele é o vilão (tendencia)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bardo = void 0;
const Personagem_1 = require("./Personagem");
class Bardo extends Personagem_1.Personagem {
    constructor(nome) {
        super(nome, 'Bardo', 90, 12, 8, 50, 40);
    }
    usarAtaqueEspecial() {
        return 0;
    }
}
exports.Bardo = Bardo;
/** COMENTÁRIOS
 * Deixamos personagens como o "Bardo" pré definido já, ou damos a opção do usuário criar um "Bardo" do jeito que ele quiser? E
 * Acredito que podemos deixar o nome apenas 'Livre', o resto, ja podemos pré definir, igual o sor pediu no projeto, O que acha? J
 * Mudei um pouco a classe dos personagens no inventário. Vamos dar uma olhada juntos depois J
 * (Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver E) Como assim
 */
