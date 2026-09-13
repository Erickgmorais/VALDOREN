"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ouro = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
class Ouro {
    nome = 'Ouro';
    tipo = TiposENUMs_1.Tipo.OURO; // Tipo indice
    qtd = 0;
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
