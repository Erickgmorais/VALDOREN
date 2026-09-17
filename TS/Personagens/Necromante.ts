// essa classe tem um método que, durante um ataque, ele pode dar um dano absurdo que com certeza irá matar o inimigo


import { red, yellow } from "../Auxiliares/Cores";
import { Personagem } from "./Personagem";

export class Necromante extends Personagem {

    constructor(nome: string) {
        super(nome, 'Necromante', 130, 25, 5, 60, -30)
    }

    // método especial de ataque subscrito 
    public usarAtaqueEspecial(): number {
        if (this.usouAtaqueEspecial) {
            return this.ataque + 500;
        } else {
            red('Voce já usou o ataque especial!')
            return this.ataque;
        }
    }
}

/** comentários
 * tem habilidade auxiliar de chamar cadáveres para ajudar ele no combate contra inimigos
 * 
 */