
import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Arma } from "../Inventario/Arma";
import { Personagem } from "./Personagem";

export class Cavaleiro extends Personagem {
    constructor(nome: string) {
        super(nome, 'Cavaleiro', 100, 18, 18, 15, 30)
        this.inventario.push(new Arma('Espada Longa', 10))
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 200;

        if (!this.usouAtaqueEspecial) {

            consoleEspecial();
            blue(`Pela honra e pelo meu juramento, nenhum inimigo permanecerá de pé! ATAQUE AUMENTADO EM 200!`);
            inimigo.tomarDano(danoFinal)
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}