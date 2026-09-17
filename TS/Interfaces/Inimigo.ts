import { Personagem } from "../Personagens/Personagem";

export interface Inimigo {
    getNome(): string;
    getVida(): number;
    getAtaque(): number;
    getDefesa(): number;
    mostrarInimigo(): void;
    usarHabilidade(personagem: Personagem): void;
    Ataque(personagem: Personagem): void;

    
}