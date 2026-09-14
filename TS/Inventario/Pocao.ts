import { TipoItem } from "./TiposENUMs";
import { EfeitoPocao } from "./TiposENUMs";
import { Item } from "../Interfaces/Item";
import { Personagem } from "../Interfaces/Personagem";
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

    getEfeito(): string {
        return EfeitoPocao[1];
    }

    // Esse método serve para que o personagem consiga usar as poções que vão ter no jogo (aumentar VIDA ou aumentar o ATAQUE).

    public tomarPocao(personagem: Personagem): void {
        if(this.efeito === EfeitoPocao.CURA){
            personagem.setVida(35);
            blue('Vida recuperada em 35!');
            stop();

        } else if (this.efeito === EfeitoPocao.FORCA){
            personagem.setAtaque(20);
            blue('Ataque aumentado em 20 do seu personagem!');
            stop();

        }
    }
}

/**
 * COMENTARIOS: 
 * 
 * 
 */