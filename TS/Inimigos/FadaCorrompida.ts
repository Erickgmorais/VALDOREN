//Causa dano em dobro
import { green, yellow} from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";


export class FadaCorrompida implements Inimigo {
    private nome: string;
    private vida: number;
    private ataque: number;
    private defesa: number;
    private habilidade: string

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
        const dano: number = personagem.tomarDano(this.ataque * 2);
        yellow(`
        ╔════════════════════════════════════════╗
        ║          HABILIDADE ESPECIAL           ║
        ╠════════════════════════════════════════╣
        ║                                        ║
        ║ ${this.nome} ativou ATAQUE DUPLO!      ║
        ║                                        ║
        ║ DANO CAUSADO  : ${dano}                ║
        ║ VIDA RESTANTE : ${personagem.getVida()}║
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