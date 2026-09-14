"use strict";
//Faz cadáveres obdecerem.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Necromante = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
class Necromante {
    nome;
    classe;
    vida;
    ataque;
    defesa;
    inventario = [];
    constructor(nome) {
        this.nome = nome;
        this.classe = 'Necromante';
        this.vida = 85;
        this.ataque = 24;
        this.defesa = 12;
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
exports.Necromante = Necromante;
