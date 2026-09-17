import { logger } from "../Auxiliares/Auxiliares";
import { green } from "../Auxiliares/Cores";
import { Item } from "../Interfaces/Item";
import { Personagem } from "./Personagem";

export class Berserker extends Personagem {

    constructor(nome: string) {
        super(nome, 'Berserker', 130, 35, 5, 25, 30)
    }
    
    usarAtaqueEspecial(): number {
        return 0
    }
    
}