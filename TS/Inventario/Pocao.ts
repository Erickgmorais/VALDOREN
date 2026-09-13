import { Tipo } from "./TiposENUMs";
import { Efeito } from "./TiposENUMs";
import { Item } from "./Item";
import { Personagem } from "../Personagem/Personagem";

/**
 * ENUMs
 * Efeitos: CURA 0, FORCA 1 
 */

export class Pocao implements Item {

    private nome: string;
    private tipo: Tipo = Tipo.POCAO; // Pocao indice 0
    private efeito: Efeito;  

    constructor(nome: string, efeito: Efeito){
        this.nome = nome;
        this.efeito = efeito;
    }

    getNome(): string {
        return this.nome
    }

    getTipo(): string {
        return Tipo[0]
    }  

    getEfeito(): string {
        return Efeito[1]
    }

    public tomarPocao(personagem: Personagem){
        if(this.efeito === Efeito.CURA){
            personagem.setVida(35);
            console.log('Vida recuperada em 35!');

        } else if (this.efeito === Efeito.FORCA){
            personagem.setDano(20);
            console.log('Aumentou 20 de dano do seu personagem!!');

        }
    }
}