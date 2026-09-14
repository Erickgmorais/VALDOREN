"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ouro = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
class Ouro {
    nome = 'Ouro';
    tipo = TiposENUMs_1.TipoItem.OURO; // Tipo indice 2
    qtd = 0;
    constructor(ouro) {
        this.qtd = ouro;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return TiposENUMs_1.TipoItem[2];
    }
    getQtdOuro() {
        return this.qtd;
    }
}
exports.Ouro = Ouro;
