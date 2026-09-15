import { logger } from "../Auxiliares/Auxiliares";
import { green } from "../Auxiliares/Cores";

import { Item } from "../Interfaces/Item";
import { Personagem } from "./Personagem";

export class Mago implements Personagem {
    private nome: string;
    private classe: string;
    private vida: number;
    private ataque: number;
    private ouro: number = 30;
    private defesa: number;
    private inventario: Item[] = [];



    constructor(nome: string) {
        this.nome = 'Zephar';
        this.classe = 'Mago';
        this.vida = 70;
        this.ataque = 30;
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

    public getOuro(): number {
        return this.ouro
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
                console.clear()
              
                green(`
        ███ █   █ █   █ █████ █   █ █████  ███  ████  ███  ███    
         █░░██  █░█░  █░█░░░░░██  █░ ░█░░░█ ░░█ █░░░█  █░░█ ░░█   
         █░░█░█ █░█░░ █░████░░█░█ █░░ █░░░█████░████░░ █░░█░ ░█░  
         █░░█░░██░░█░█ ░█░░░░ █░░██░░ █░░ █░░░█░█░░█░ ░█░░█░░ █░░ 
        ███░█░░ █░░ █ ░ █████░█░░ █░░ █░░ █░░░█░█░░░█░███░ ███ ░░ 
         ░░░ ░░  ░░  ░ ░ ░░░░░ ░░  ░░  ░░  ░░  ░░░░  ░ ░░░  ░░░ ░ 
         `)
                    
                green(`POÇOES:`)
                for (let item of this.inventario) {
                    if (item.getTipo() === 'POCAO') {
                        green(`- ${item.getNome()}`)
                    }
                }
        
                green(`\nARMADURAS E ARMAS:`)
                for (let item of this.inventario) {
                    if (item.getTipo() === 'ARMA' || item.getTipo() === 'ARMADURA') {
                        green(`- ${item.getNome()}`)
        
                    }
                }
        
                green(`\nOUTROS:`)
                for (let item of this.inventario) {
                    if (item.getTipo() === 'MOEDA') {
                        green(`- ${item.getNome()}`)
        
                    }
                }
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