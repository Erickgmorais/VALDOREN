import { logger } from "../Auxiliares/Auxiliares";
import { green, red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";



export class Esqueleto implements Inimigo {
    private nome: string;
    private vida: number;
    private ataque: number;
    private defesa: number;
    private habilidade: string;

    constructor(nome: string, vida: number, ataque: number, defesa: number, habilidade: string) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.habilidade = habilidade;

    }

    getNome(): string {
        return this.nome
    }

    getVida(): number {
        return this.vida
    }

    getAtaque(): number {
        return this.ataque
    }

    getDefesa(): number {
        return this.defesa
    }

    //Método de ataque.
    Ataque(personagem: Personagem): void {
        const danoAleatorio: number = Math.floor(Math.random() * this.ataque) + 1;
        const danoFinal: number = personagem.tomarDano(danoAleatorio);
        yellow(`
        ╔════════════════════════════════════════╗
        ║                 ATAQUE                 ║
        ╠════════════════════════════════════════╣
        ║                                        ║
        ║ ${this.nome} atacou ${personagem.getNome()}!║
        ║                                        ║
        ║ DANO CAUSADO  : ${danoFinal}           ║
        ║ VIDA RESTANTE : ${personagem.getVida()}║
        ║                                        ║
        ╚════════════════════════════════════════╝
        `)
    } 

    //Método de habilidade do inimigo
    usarHabilidade(personagem: Personagem): void {
        const rouboAleatorio: number = Math.floor(Math.random() * 5) + 3
        personagem.setVida(-rouboAleatorio);
        this.vida += rouboAleatorio;
        yellow(`
        ╔════════════════════════════════════════╗
        ║             ROUBO DE VIDA              ║
        ╠════════════════════════════════════════╣
        ║                                        ║
        ║ ${this.nome} roubou vida de ${personagem.getNome()}!║
        ║                                        ║
        ║ DANO CAUSADO  : ${rouboAleatorio}      ║
        ║ VIDA ROUBADA  : ${rouboAleatorio}      ║
        ║ VIDA ATUAL    : ${this.vida}           ║
        ║                                        ║
        ╚════════════════════════════════════════╝
        `);
    } 
    
    //Mostrar dados do inimigo
    mostrarInimigo(): void {
        yellow(`
        ╔════════════════════════════════════════╗
        ║                 INIMIGO                ║
        ╠════════════════════════════════════════╣
        ║                                        ║
        ║ NOME        : ${this.nome}             ║
        ║ VIDA        : ${this.vida}             ║
        ║ ATAQUE      : ${this.ataque}           ║
        ║ DEFESA      : ${this.defesa}           ║
        ║ HABILIDADE  : ${this.habilidade}       ║
        ║                                        ║
        ╚════════════════════════════════════════╝
        `);
    }
    

}
