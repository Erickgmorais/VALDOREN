// personagme que mais vai ter ouro porque a igreja rouba de nós 

import { Personagem } from "./Personagem";

export class Clerigo extends Personagem {

    constructor(nome: string) {
        super(nome, 'Clerigo', 100, 10, 8, 50, 50)
    }

    usarAtaqueEspecial(): number {
        return 0
    }
}