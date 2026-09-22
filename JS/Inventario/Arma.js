"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arma = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
class Arma {
    nome;
    dano;
    nivel = 1;
    tipo = TiposENUMs_1.TipoItem.ARMA; // Arma índice 4
    constructor(nome, defesa) {
        this.nome = nome;
        this.dano = defesa;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return TiposENUMs_1.TipoItem[4];
    }
    getDefesa() {
        return this.dano;
    }
    getNivel() {
        return this.nivel;
    }
    setNivel() {
        this.nivel++;
    }
}
exports.Arma = Arma;
