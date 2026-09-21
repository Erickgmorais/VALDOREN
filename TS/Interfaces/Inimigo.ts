import { Personagem } from "../Personagens/Personagem";

export interface Inimigo {
    getNome(): string;
    getVida(): number;
    getAtaque(): number;
    getDefesa(): number;
    getHabilidade(): string;
    fichaInimigo(): void;
    fichaHabilidade(): void;
    // usarHabilidade(personagem: Personagem): void;
    atacar(personagem: Personagem): void;
    tomarDano(dano: number): number;

    
}