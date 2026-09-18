import { consoleEspecial, logger } from "../Auxiliares/Auxiliares";
import { blue, green } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Item } from "../Interfaces/Item";
import { Personagem } from "./Personagem";

export class Berserker extends Personagem {

    constructor(nome: string) {
        super(nome, 'Berserker', 150, 12, 5, 25, 30)
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 500;

        if (!this.usouAtaqueEspecial) {

            inimigo.tomarDano(danoFinal)
            consoleEspecial();
            blue(`A dor não me enfraquece... ELA ME TORNA MAIS FORTE! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }

}