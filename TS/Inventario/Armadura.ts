import { Item } from "../Interfaces/Item";
import { TipoItem } from "./TiposENUMs";

export class Armadura implements Item {
    private nome: string;
    private desefa: number;
    private tipo: TipoItem = TipoItem.ARMADURA; // Armadura índice 3

    constructor(nome: string, defesa: number) {
        this.nome = nome;
        this.desefa = defesa;
    }

    public getNome(): string {
        return this.nome;
    }

    public getTipo(): string {
        return TipoItem[3];
    }

    public getDefesa(): number {
        return this.desefa;
    }   
}