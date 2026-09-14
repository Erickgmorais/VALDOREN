

import { logger } from "../Auxiliares/Auxiliares";
import { Item } from "../Interfaces/Item";
import { Personagem } from "../Interfaces/Personagem";

export class PersonagemJogador implements Personagem {
    private nome: string;
        private classe: string;
        private vida: number;
        private ataque: number;
        private defesa: number;
        private inventario: Item[] = [];
    
        constructor(nome: string, classe: string, vida: number, ataque: number, defesa: number, ouro: number) {
            this.nome = nome
            this.classe = classe
            this.vida = vida
            this.ataque = ataque
            this.defesa = defesa
        }
    
        // getters e seters
    public getNome(): string {
        return this.nome;
    }

    public getClasse(): string {
        return this.classe;
    }

    public getVida(): number {
        return this.vida;
    }

    public getAtaque(): number {
        return this.ataque
    }

    public getDefesa(): number {
        return this.defesa;
    }

    // A definir com Erick se gostou da ideia J
    // getTemMoeda(): boolean {
    //     return this.pegouMoeda;
    // }

    public setVida(val: number): void {
        this.vida += val;
        
    }

    public setAtaque(val: number): void {
        this.ataque += val;
    }

// -- ---------------------------- --

// Métodos da classe

    public mostrarInventario(): void {
        
    }

    // FAZER PERFUMARIA NA FICHA
    public fichaPersonagem(): void {
        logger(`
============================
        Personagem
============================

Nome: ${this.nome}
Classe: ${this.classe}

Vida: ${this.vida}/100
Ataque: ${this.ataque}
Defesa: ${this.defesa}

`)
    }
}

//Não permitir passar valores muito altos.
/**
 * Essa classe serve para o que? Se vamos criar direto um objeto dos modelos
 * 
 * 
 * 
 */