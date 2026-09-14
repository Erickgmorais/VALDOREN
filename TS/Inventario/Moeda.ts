import { Item } from "../Interfaces/Item";
import { TipoItem } from "./TiposENUMs";

export class Moeda implements Item {

    private nome: string;
    private tipo: TipoItem = TipoItem.MOEDA; // Moeda indice 1
    private usada: boolean = false;

    constructor(nome: string){
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome
    }

    public getTipo(): string {
        return TipoItem[1] // Retorna MOEDA
    }

    public usarMoeda(): void {
        this.usada = true;
    }   
}