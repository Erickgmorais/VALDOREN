import { Item } from "../Interfaces/Item";
import { TipoItem } from "./TiposENUMs";


export class Ouro implements Item {

    private nome: string = 'Ouro';
    private tipo: TipoItem = TipoItem.OURO; // Tipo indice
    private qtd: number = 0;

    getNome(): string {
        return this.nome;
    }

    getTipo(): string {
        return TipoItem[2];
    }

    getQtdOuro(): number {
        return this.qtd;
    }

}

