// jogador com o maior ataque!

import { Personagem } from "./Personagem";

export class Cacador extends Personagem {
    
    constructor(nome: string) {
        super(nome, 'Cacador', 85, 25, 12, 20, 15)
    }

    usarAtaqueEspecial(): number {
        return 0
    }
}