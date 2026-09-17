

import { Personagem } from "./Personagem";

export class Mago extends Personagem {

    constructor(nome: string) {
        super(nome, 'Mago', 85, 25, 12, 40, 30)
    }

    usarAtaqueEspecial(): number {
        return 0
    }
}