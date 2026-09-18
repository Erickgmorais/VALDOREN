

import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "./Personagem";


export class Paladino extends Personagem {

    constructor(nome: string) {
        super(nome, 'Paladino', 100, 15, 5, 30, 30)
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 500;

        if (!this.usouAtaqueEspecial) {

            consoleEspecial();
            blue(`Pela luz sagrada, meu juramento será cumprido e as trevas serão destruídas! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            inimigo.tomarDano(danoFinal)
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}