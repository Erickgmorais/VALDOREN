// Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver.
// no final da história ele é o vilão (tendencia)

import { logger } from "../Auxiliares/Auxiliares";
import { green } from "../Auxiliares/Cores";
import { Item } from "../Interfaces/Item";
import { Personagem } from "./Personagem";

export class Bardo extends Personagem {

    constructor(nome: string) {
        super(nome, 'Bardo', 50, 12, 10, 30, 40)
    }

}
/** COMENTÁRIOS
 * Deixamos personagens como o "Bardo" pré definido já, ou damos a opção do usuário criar um "Bardo" do jeito que ele quiser? E
 * Acredito que podemos deixar o nome apenas 'Livre', o resto, ja podemos pré definir, igual o sor pediu no projeto, O que acha? J
 * Mudei um pouco a classe dos personagens no inventário. Vamos dar uma olhada juntos depois J
 * (Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver E) Como assim
 */




