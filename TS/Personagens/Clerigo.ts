// personagme que mais vai ter ouro porque a igreja rouba de nós 

import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Arma } from "../Inventario/Arma";
import { Personagem } from "./Personagem";

export class Clerigo extends Personagem {

    constructor(nome: string) {
        super(nome, 'Clerigo', 100, 10, 20, 50, 50)
        this.inventario.push(new Arma('Espada Sagrada', 10))
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 200;

        if (!this.usouAtaqueEspecial) {

            consoleEspecial();
            blue(`Que a luz divina me envolva e expulse as trevas deste mundo! ATAQUE AUMENTADO EM 200!`);
            inimigo.tomarDano(danoFinal)
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}