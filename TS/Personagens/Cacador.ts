// jogador com o maior ataque!

import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Arma } from "../Inventario/Arma";
import { Personagem } from "./Personagem";

export class Cacador extends Personagem {

    constructor(nome: string) {
        super(nome, 'Cacador', 120, 25, 5, 100, 15)
        this.inventario.push(new Arma('Arco Elfico', 10))
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 200;

        if (!this.usouAtaqueEspecial) {

            consoleEspecial();
            blue(`Você pode tentar fugir... mas minha flecha sempre encontra seu alvo! ATAQUE AUMENTADO EM 200!`);
            inimigo.tomarDano(danoFinal)
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}