"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moeda = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
class Moeda {
    constructor(nome) {
        this.tipo = TiposENUMs_1.TipoItem.MOEDA; // Moeda indice 1
        this.usada = false;
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
