"use strict";
// Sua arma tem um dano maior que os outros, e consegue carregar mais equipamentos.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cacador = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
class Cacador {
    nome;
    classe;
    vida;
    ataque;
    defesa;
    equipamento = [];
    constructor(nome) {
        this.nome = nome;
        this.classe = 'Cacador';
        this.vida = 100;
        this.ataque = 25;
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
exports.Cacador = Cacador;
