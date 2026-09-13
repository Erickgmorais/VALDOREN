"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    dano = 0;
    vida = 0;
    nome;
    inventario = [];
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
    setVida(val) {
        this.vida += val;
    }
    setDano(val) {
        this.dano += val;
    }
}
exports.Personagem = Personagem;
