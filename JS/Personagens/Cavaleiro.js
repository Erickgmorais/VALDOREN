"use strict";
// Não tira vidas, usa tecnicas para incapacitar inimigos. Podemos pensar nessa ideia, que, caso escolha
//ele não poderá tirar vidas. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavaleiro = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
class Cavaleiro {
    nome;
    classe;
    vida;
    ataque;
    defesa;
    inventario = [];
    constructor(nome) {
        this.nome = nome;
        this.classe = 'Cavaleiro';
        this.vida = 120;
        this.ataque = 18;
        this.defesa = 20;
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
exports.Cavaleiro = Cavaleiro;
