

import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "./Personagem";

export class Mago extends Personagem {

    constructor(nome: string) {
        super(nome, 'Mago', 120, 25, 2, 40, 30)
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 500;

        if (!this.usouAtaqueEspecial) {

            consoleEspecial();
            blue(`
As forças arcanas respondem ao meu chamado... prepare-se para ser consumido! 
O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            inimigo.tomarDano(danoFinal)
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}