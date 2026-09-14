"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berserker = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
class Berserker {
    nome;
    classe;
    vida;
    ataque;
    defesa;
    inventario = [];
    constructor(nome) {
        this.nome = nome;
        this.classe = 'Berserker';
        this.vida = 130;
        this.ataque = 35;
        this.defesa = 5;
    }
    // getters e seters
    getNome() {
        return this.nome;
    }
    getClasse() {
        return this.classe;
    }
    getVida() {
        return this.vida;
    }
    getAtaque() {
        return this.ataque;
    }
    getDefesa() {
        return this.defesa;
    }
    // A definir com Erick se gostou da ideia J
    // getTemMoeda(): boolean {
    //     return this.pegouMoeda;
    // }
    setVida(val) {
        this.vida += val;
    }
    setAtaque(val) {
        this.ataque += val;
    }
    // -- ---------------------------- --
    // Métodos da classe
    mostrarInventario() {
    }
    // FAZER PERFUMARIA NA FICHA
    fichaPersonagem() {
        (0, Auxiliares_1.logger)(`
============================
        Personagem
============================

Nome: ${this.nome}
Classe: ${this.classe}

Vida: ${this.vida}/100
Ataque: ${this.ataque}
Defesa: ${this.defesa}

`);
    }
}
exports.Berserker = Berserker;
