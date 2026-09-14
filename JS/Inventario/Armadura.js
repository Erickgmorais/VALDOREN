"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armadura = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
class Armadura {
    nome;
    desefa;
    tipo = TiposENUMs_1.TipoItem.ARMADURA; // Armadura índice 3
    constructor(nome, defesa) {
        this.nome = nome;
        this.desefa = defesa;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return TiposENUMs_1.TipoItem[3];
    }
    getDefesa() {
        return this.desefa;
    }
}
exports.Armadura = Armadura;
