import { Item } from "../Inventario/Item";

export abstract class Personagem {
    
    private dano: number = 0;
    private vida: number = 0;
    private nome: string;
    private inventario: Item[] = []
    
    constructor(nome: string, vida: number){
        this.nome = nome;
        this.vida = vida
    }

    public setVida(val: number){
        this.vida += val;
    }

    public setDano(val: number){
        this.dano += val;
    }
    
}
