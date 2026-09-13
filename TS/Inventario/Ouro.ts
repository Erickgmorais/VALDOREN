import { Item } from "./Item";
import { Tipo } from "./TiposENUMs";


export class Ouro implements Item {

    private nome: string;
    private tipo: Tipo = Tipo.OURO; // Tipo indice
    private qtd: number = 0

    constructor(nome: string){
        this.nome = nome;

    }


    getNome(): string {
        return this.nome;
    }

    getTipo(): string {
        return Tipo[2];
    }

    getQtdOuro(): number {
        return this.qtd;
    }

}

