//Causa dano em dobro dependendo de uma chance variável 
import { red, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";


export class FadaCorrompida implements Inimigo {
    private nome: string = 'Fada Corrompida';
    private vida: number = 30;
    private ataque: number = 9;
    private defesa: number = 3;
    private habilidade: string = 'Dano em dobro'

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

    //Método de ataque.
    public atacar(personagem: Personagem): void {

        const chance: number = Math.random();
        const danoAleatorio: number = Math.floor(Math.random() * this.ataque) + 1;
        let danoFinal: number;


        if (chance < 0.60) { // 60% de chance de ter ataque duplo
            danoFinal = danoAleatorio * 2;
            red(`
        ATAQUE DO INIMIGO:
        ╔════════════════════════════════════════╗
        ║          HABILIDADE ESPECIAL           ║
        ╠════════════════════════════════════════╣
        ║                                        ║
        ║ ${this.nome} ativou ATAQUE DUPLO!      ║
        ║                                        ║
        ║ DANO CAUSADO  : ${danoFinal}           ║
        ║                                        ║
        ║                                        ║
        ╚════════════════════════════════════════╝
        `);
            personagem.tomarDano(danoFinal);

        } else {
            danoFinal = danoAleatorio;
            yellow(`
        ATAQUE DO INIMIGO:
        ╔════════════════════════════════════════╗
        ║                 ATAQUE                 ║
        ╠════════════════════════════════════════╣
        ║                                        ║
        ║ ${this.nome} atacou ${personagem.getNome()}!║
        ║                                        ║
        ║ DANO CAUSADO  : ${danoFinal}           ║
        ║                                        ║
        ╚════════════════════════════════════════╝
            `)
        }

    }

    //Método de habilidade do inimigo
    usarHabilidade(personagem: Personagem): void {
        const dano: number = personagem.tomarDano(this.ataque * 2);
        red(`
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
    public fichaInimigo(): void {
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