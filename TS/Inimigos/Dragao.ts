//Perde HP para aumentar muito o ataque

import { stop } from "../Auxiliares/Auxiliares";
import { blue, red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";


export class Dragao implements Inimigo {
    private nome: string = 'Dragao da montanha';
    private vida: number = 100;
    private ataque: number = 25;
    private defesa: number = 10;
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

    public getHabilidade(): string {
        return this.habilidade
    }

    // Método utilizado no inicio do combate em cada confronto
    public fichaHabilidade(): void {
        red(`
O inimigo que voce ira combater tem o seguinte especial:
Com uma chande de 40% em cada ataque, ele poderá perder -5 de vida para aumentar seu ataque em +8        
        `)
    }

    public tomarDano(dano: number): number {

        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória

        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);

        this.vida -= danoFinal;

        blue(`
-- ----------------------------------------- --        
    ${this.nome.toUpperCase()} TOMOU DANO!
    Dano recebido: ${dano}
    Defesa: ${defesaAleatoria}
    Dano efetivo recebido: ${danoFinal}
-- ----------------------------------------- --    
        `)

        if (this.vida < 0) {
            this.vida = 0;
            return dano;
        }
        return dano;
    }

    //Método de ataque. Rouba hp para dar mais dano
    public atacar(personagem: Personagem): void {

        const chance: number = Math.random(); // controlar a chance do personagem roubar HP para dar mais dano
        let danoFinal: number;

        if (chance < 0.40) { // 34% de chance de aumentar o dano dele

            this.vida -= 5;
            this.ataque += 8;

            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // cálculo aleatório do dado do inimigo

            red(`
    ${this.nome.toUpperCase()}
    ╔════════════════════════════════════════╗
    ║              ESPECIAL!                 ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome.toUpperCase().padEnd(38)} 
    ║ sacrificou 5 de vida!                  ║
    ║                                        ║
    ║ ATAQUE AUMENTADO : +8                  ║
    ║ ATAQUE ATUAL     : ${String(this.ataque).padEnd(17)}   
    ║                                        ║
    ╚════════════════════════════════════════╝
`);

            personagem.tomarDano(danoFinal); // personagem tomando dano 
            stop()
        } else {

            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // Calculo o dano final de acordo com a variante da minha chance de especial

            red(`
    ATAQUE DO INIMIGO:        
    ╔═══════════════════════════════════════════════╗
    ║                 ATAQUE                        ║
    ╠═══════════════════════════════════════════════╣
    ║                                               ║
    ║ ${this.nome} atacou                           
    ║                                               ║
    ║ DANO ENVIADO  : ${String(danoFinal).padEnd(27)}
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
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
    ║ NOME        : ${String(this.nome).padEnd(23)}   
    ║ VIDA        : ${String(this.vida).padEnd(23)}   
    ║ ATAQUE      : ${String(this.ataque).padEnd(23)}   
    ║ DEFESA      : ${String(this.defesa).padEnd(23)}   
    ║ HABILIDADE  : ${String(this.habilidade).padEnd(23)} 
    ║                                         ║
    ╚═════════════════════════════════════════╝
        `);
    }
}