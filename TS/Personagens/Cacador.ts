// jogador com o maior ataque!

import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "./Personagem";

export class Cacador extends Personagem {

    constructor(nome: string) {
        super(nome, 'Cacador', 120, 25, 5, 20, 15)
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 500;

        if (!this.usouAtaqueEspecial) {

            consoleEspecial();
            inimigo.tomarDano(danoFinal)
            blue(`Você pode tentar fugir... mas minha flecha sempre encontra seu alvo! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}