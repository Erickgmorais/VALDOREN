// Não tira vidas, usa tecnicas para incapacitar inimigos. Podemos pensar nessa ideia, que, caso escolha
//ele não poderá tirar vidas. 


import { Personagem } from "./Personagem";

export class Cavaleiro extends Personagem {
    constructor(nome: string) {
        super(nome, 'Cavaleiro', 120, 18, 20, 15, 30)
    }

    usarAtaqueEspecial(): number {
        return 0
    }
}