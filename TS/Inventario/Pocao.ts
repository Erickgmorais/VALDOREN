import { TipoItem } from "./TiposENUMs";
import { EfeitoPocao } from "./TiposENUMs";
import { Item } from "../Interfaces/Item";
import { Personagem } from "../Personagens/Personagem";
import { blue } from "../Auxiliares/Cores";
import { stop } from "../Auxiliares/Auxiliares";

/**
 * ENUMs
 * Efeitos: CURA 0, FORCA 1 
 */

export class Pocao implements Item {

    private nome: string;
    private tipo: TipoItem = TipoItem.POCAO; // Pocao indice 0
    private efeito: EfeitoPocao;  // Efeito vamos colocar na hora de criarmos o objeto (VIDA OU CURA) e vamos passar por parametro na criação

    constructor(nome: string, efeito: EfeitoPocao){
        this.nome = nome;
        this.efeito = efeito;
    }

    getNome(): string {
        return this.nome;
    }

    getTipo(): string {
        return TipoItem[0];
    }

    // O retorno do acesso de um enum, vai ser sempre um number, é a posição dele no enum, como se fosse um array
    // Então quando eu retorno this.efeito, ele vai me retornar a posição que esse enum tem no codigo
    // CURA = 0 e FORCA = 1
    getEfeito(): number { 
        return this.efeito;
    }

}

/**
 * COMENTARIOS: 
 * 
 * 
 */