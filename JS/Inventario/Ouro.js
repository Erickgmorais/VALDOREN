"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ouro = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
class Ouro {
    nome;
    tipo = TiposENUMs_1.Tipo.OURO; // Tipo indice
    qtd = 0;
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return TiposENUMs_1.Tipo[2];
    }
    getQtdOuro() {
        return this.qtd;
    }
}
exports.Ouro = Ouro;
