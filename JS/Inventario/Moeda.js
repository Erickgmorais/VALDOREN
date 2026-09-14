"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moeda = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
class Moeda {
    nome;
    tipo = TiposENUMs_1.TipoItem.MOEDA; // Moeda indice 1
    usada = false;
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return TiposENUMs_1.TipoItem[1]; // Retorna MOEDA
    }
    usarMoeda() {
        this.usada = true;
    }
}
exports.Moeda = Moeda;
