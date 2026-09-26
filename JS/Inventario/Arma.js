"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arma = void 0;
const Cores_1 = require("../Auxiliares/Cores");
const TiposENUMs_1 = require("./TiposENUMs");
class Arma {
    constructor(nome, defesa) {
        this.nivel = 1;
        this.tipo = TiposENUMs_1.TipoItem.ARMA; // Arma índice 4
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
        if (this.nivel < 5) {
            this.nivel++;
        }
        else {
            (0, Cores_1.red)(`Sua arma já está no nível máximo!`);
            stop();
        }
    }
}
exports.Arma = Arma;
