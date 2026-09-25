

import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Arma } from "../Inventario/Arma";
import { Personagem } from "./Personagem";


export class Paladino extends Personagem {

    constructor(nome: string) {
        super(nome, 'Paladino', 100, 15, 5, 100, 30)
        this.inventario.push(new Arma('Espada Sagrada', 10))
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 200;

        if (!this.usouAtaqueEspecial) {

            consoleEspecial();
            blue(`Pela luz sagrada, meu juramento será cumprido e as trevas serão destruídas! ATAQUE AUMENTADO EM 200!`);
            inimigo.tomarDano(danoFinal)
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}