"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armadura = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
class Armadura {
    constructor(nome, defesa) {
        this.tipo = TiposENUMs_1.TipoItem.ARMADURA; // Armadura índice 3
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
