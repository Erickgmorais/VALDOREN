// Não tira vidas, usa tecnicas para incapacitar inimigos. Podemos pensar nessa ideia, que, caso escolha
//ele não poderá tirar vidas. 

import { logger } from "../Auxiliares/Auxiliares";
import { Item } from "../interfaces/Item";
import { Personagem } from "../interfaces/Personagem";

export class Cavaleiro implements Personagem {
    private nome: string;
    private classe: string;
    private vida: number;
    private ataque: number;
    private defesa: number;
    private inventario: Item[] = [];

    constructor(nome: string) {
        this.nome = nome;
        this.classe = 'Cavaleiro';
        this.vida = 120;
        this.ataque = 18;
        this.defesa = 20;
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