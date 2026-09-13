import { Item } from "./Item";
import { Tipo } from "./TiposENUMs";

export class Moeda implements Item {

    private nome: string;
    private tipo: Tipo = Tipo.MOEDA; // Moeda indice 1
    private usada: boolean = false;

    constructor(nome: string){
        this.nome = nome;
    }

    getNome(): string {
        return this.nome
    }

    getTipo(): string {
        return Tipo[1] // Retorna MOEDA
    }

    public usarMoeda(): void {
        this.usada = true;
    }

}