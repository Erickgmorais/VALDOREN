import { Item } from "../interfaces/Item";
import { TipoItem } from "./TiposENUMs";

export class Arma implements Item {
    private nome: string;
    private dano: number;
    private tipo: TipoItem = TipoItem.ARMA; // Arma índice 4

    constructor(nome: string, defesa: number) {
        this.nome = nome;
        this.dano = defesa;
    }

    public getNome(): string {
        return this.nome;
    }

    public getTipo(): string {
        return TipoItem[4];
    }

    public getDefesa(): number {
        return this.dano;
    }   
}

