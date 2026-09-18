// essa classe tem um método que, durante um ataque, ele pode dar um dano absurdo que com certeza irá matar o inimigo


import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue, red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "./Personagem";

export class Necromante extends Personagem {

    constructor(nome: string) {
        super(nome, 'Necromante', 130, 20, 10, 60, -30)
    }

    // método especial de ataque subscrito 
    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 500;

        if (!this.usouAtaqueEspecial) {

            inimigo.tomarDano(danoFinal)
            consoleEspecial()
            blue(`OS CADÁVERES SE ERGUEM E AVANÇAM SOBRE ${inimigo.getNome()}! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }
}

/** comentários
 * tem habilidade auxiliar de chamar cadáveres para ajudar ele no combate contra inimigos
 * 
 */