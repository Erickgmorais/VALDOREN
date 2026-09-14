"use strict";
// Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver.
// 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bardo = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
class Bardo {
    nome;
    classe;
    vida;
    ataque;
    defesa;
    // private pegouMoeda: boolean = false; A definir com erick J
    ouro = 30;
    inventario = [];
    constructor(nome) {
        this.nome = nome;
        this.classe = 'Bardo';
        this.vida = 90;
        this.ataque = 12;
        this.defesa = 8;
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
    setOuro(val) {
        this.ouro += val;
    }
    // -- ---------------------------- --
    // Métodos da classe
    adicionaInventario(item) {
        this.inventario.push(item);
    }
    removeIteminventario(item) {
        const position = this.inventario.indexOf(item);
        if (position > -1) {
            this.inventario.splice(position, 1);
        }
    }
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
exports.Bardo = Bardo;
/** COMENTÁRIOS
 * Deixamos personagens como o "Bardo" pré definido já, ou damos a opção do usuário criar um "Bardo" do jeito que ele quiser? E
 * Acredito que podemos deixar o nome apenas 'Livre', o resto, ja podemos pré definir, igual o sor pediu no projeto, O que acha? J
 * Mudei um pouco a classe dos personagens no inventário. Vamos dar uma olhada juntos depois J
 * (Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver E) Como assim
 */
