"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berserker = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Personagem_1 = require("./Personagem");
class Berserker extends Personagem_1.Personagem {
    nome;
    classe;
    vida;
    ataque;
    defesa;
    ouro = 30;
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
    getOuro() {
        return this.ouro;
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
        console.clear();
        (0, Cores_1.green)(`
    ███ █   █ █   █ █████ █   █ █████  ███  ████  ███  ███    
     █░░██  █░█░  █░█░░░░░██  █░ ░█░░░█ ░░█ █░░░█  █░░█ ░░█   
     █░░█░█ █░█░░ █░████░░█░█ █░░ █░░░█████░████░░ █░░█░ ░█░  
     █░░█░░██░░█░█ ░█░░░░ █░░██░░ █░░ █░░░█░█░░█░ ░█░░█░░ █░░ 
    ███░█░░ █░░ █ ░ █████░█░░ █░░ █░░ █░░░█░█░░░█░███░ ███ ░░ 
     ░░░ ░░  ░░  ░ ░ ░░░░░ ░░  ░░  ░░  ░░  ░░░░  ░ ░░░  ░░░ ░ 
     `);
        (0, Cores_1.green)(`POÇOES:`);
        for (let item of this.inventario) {
            if (item.getTipo() === 'POCAO') {
                (0, Cores_1.green)(`- ${item.getNome()}`);
            }
        }
        (0, Cores_1.green)(`\nARMADURAS E ARMAS:`);
        for (let item of this.inventario) {
            if (item.getTipo() === 'ARMA' || item.getTipo() === 'ARMADURA') {
                (0, Cores_1.green)(`- ${item.getNome()}`);
            }
        }
        (0, Cores_1.green)(`\nOUTROS:`);
        for (let item of this.inventario) {
            if (item.getTipo() === 'MOEDA') {
                (0, Cores_1.green)(`- ${item.getNome()}`);
            }
        }
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
