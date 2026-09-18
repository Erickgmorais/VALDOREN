// esse personagem não da dano, apenas rouba a sua vida, como se fosse um dementador
// Esse oponente em questão não terá defesa.. porque ele ja vai soubar vida do oponente e pegar para Si

import { clear, stop } from "../Auxiliares/Auxiliares";
import { red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";



export class Esqueleto implements Inimigo {
    private nome: string = 'Esqueleto das Trevas';
    private vida: number = 40;
    private ataque: number = 15; 
    private defesa: number = 0;
    private habilidade: string = 'Roubo de vida do oponente';


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

    public tomarDano(dano: number): number {
        
        this.vida -= dano;
        

        red(`
    -- ----------------------------------------- --
        ${this.nome.toUpperCase()} TOMOU DANO! 
        Dano recebido: ${dano}
    -- ----------------------------------------- --
        `)
        stop()

        if(this.vida < 0){
            this.vida = 0;
            stop()
            return dano;
        }
        return dano;
    }

    //Método de ataque.
    public atacar(personagem: Personagem): void {

        clear();

        const rouboAleatorio: number = Math.floor(Math.random() * this.ataque) + 1;
        const vidaRoubada = personagem.tomarDano(rouboAleatorio); // método de tomar dano retorna o dano efetivo
        this.vida += vidaRoubada;

        red(`
    ATAQUE DO INIMIGO:        
    ╔════════════════════════════════════════╗
    ║             ROUBO DE VIDA              ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${`${this.nome}                   ║
    ║ atacou ${personagem.getNome()}!`.padEnd(39)}            ║
    ║                                        ║
    ║ VIDA ROUBADA : ${String(vidaRoubada).padEnd(23)} ║
    ║                                        ║
    ║                                        ║
    ╚════════════════════════════════════════╝
        `)
        stop()
    } 
    
    //Mostrar dados do inimigo
    public fichaInimigo(): void {
        red(`      
    ╔═════════════════════════════════════════╗
    ║                 INIMIGO                 ║
    ╠═════════════════════════════════════════╣
    ║                                         ║
    ║ NOME        : ${String(this.nome).padEnd(23)}   ║
    ║ VIDA        : ${String(this.vida).padEnd(23)}   ║
    ║ ATAQUE      : ${String(this.ataque).padEnd(23)}   ║
    ║ DEFESA      : ${String(this.defesa).padEnd(23)}   ║
    ║ HABILIDADE  : ${String(this.habilidade).padEnd(23)} ║
    ║                                         ║
    ╚═════════════════════════════════════════╝
        `);
    }
}
