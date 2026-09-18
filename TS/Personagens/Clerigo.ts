// personagme que mais vai ter ouro porque a igreja rouba de nós 

import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "./Personagem";

export class Clerigo extends Personagem {

    constructor(nome: string) {
        super(nome, 'Clerigo', 100, 10, 20, 50, 50)
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 500;

        if (!this.usouAtaqueEspecial) {

            consoleEspecial();
            blue(`Que a luz divina me envolva e expulse as trevas deste mundo! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            inimigo.tomarDano(danoFinal)
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}