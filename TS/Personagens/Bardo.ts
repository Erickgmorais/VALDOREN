// Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver.
// 

import { logger } from "../auxiliares/Auxiliares";
import { Item } from "../interfaces/Item";
import { Personagem } from "../interfaces/Personagem";

export class Bardo implements Personagem {
    private nome: string;
    private classe: string;
    private vida: number;
    private ataque: number;
    private defesa: number;
    // private pegouMoeda: boolean = false; A definir com erick J
    // private ouro: number; Tirei o ouro porque eu criei ele como Item no inventário, o que acha? J
    private inventario: Item[] = [];

    constructor(nome: string) {
        this.nome = nome;
        this.classe = 'Bardo';
        this.vida = 90;
        this.ataque = 12;
        this.defesa = 8;
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

/** COMENTÁRIOS
 * Deixamos personagens como o "Bardo" pré definido já, ou damos a opção do usuário criar um "Bardo" do jeito que ele quiser? E
 * Acredito que podemos deixar o nome apenas 'Livre', o resto, ja podemos pré definir, igual o sor pediu no projeto, O que acha? J
 * Mudei um pouco a classe dos personagens no inventário. Vamos dar uma olhada juntos depois J
 * (Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver E) Como assim
 */

