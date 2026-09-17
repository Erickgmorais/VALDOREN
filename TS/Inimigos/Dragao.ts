//Perde HP para aumentar muito o ataque

import { stop } from "../Auxiliares/Auxiliares";
import { red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";


export class Dragao implements Inimigo {
    private nome: string = 'Dragao da montanha';
    private vida: number = 90;
    private ataque: number = 12;
    private defesa: number = 3;
    private habilidade: string = 'Conversão vida em Ataque'


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

        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória

        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);

        this.vida -= danoFinal;

        red(`
    -- ----------------------------------------- --        
        ${this.nome.toUpperCase()} TOMOU DANO!
        Dano recebido: ${dano}
        Defesa: ${defesaAleatoria}
        Dano efetivo recebido: ${danoFinal}
    -- ----------------------------------------- --    
        `)

        if (this.vida < 0) {
            this.vida = 0;
            red('Inimigo morreu');
            return dano;
        }
        return dano;
    }

    //Método de ataque. Rouba hp para dar mais dano
    public atacar(personagem: Personagem): void {

        const chance: number = Math.random(); // controlar a chance do personagem roubar HP para dar mais dano
        let danoFinal: number;

        if (chance < 0.30) { // 30% de chance de aumentar o dano dele
            
            this.vida -= 5;
            this.ataque += 8;
            
            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // cálculo aleatório do dado do inimigo
            
            red(`
    ATAQUE DO INIMIGO:
    ╔════════════════════════════════════════╗
    ║               ESPECIAL!                ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome} sacrificou 5 de vida!     ║
    ║                                        ║
    ║ ATAQUE AUMENTADO : +8                  ║
    ║ ATAQUE ATUAL : ${this.ataque}          ║
    ║                                        ║
    ╚════════════════════════════════════════╝
                `);
                personagem.tomarDano(danoFinal); // personagem tomando dano 
                stop()
        } else {

            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // Calculo o dano final de acordo com a variante da minha chance de especial
            
        red(`
    ATAQUE DO INIMIGO:        
    ╔════════════════════════════════════════╗
    ║                 ATAQUE                 ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${`${this.nome} atacou ${personagem.getNome()}!`.padEnd(39)}║
    ║                                        ║
    ║ DANO CAUSADO  : ${String(danoFinal).padEnd(23)}║
    ║ VIDA RESTANTE : ${String(personagem.getVida()).padEnd(23)}║
    ║                                        ║
    ╚════════════════════════════════════════╝
                `)
                
                personagem.tomarDano(danoFinal); // personagem tomando dano 
                stop()

        }
    };

    //Mostrar dados do inimigo
    fichaInimigo(): void {
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