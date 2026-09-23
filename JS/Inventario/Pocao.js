"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pocao = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
/**
 * ENUMs
 * Efeitos: CURA 0, FORCA 1
 */
class Pocao {
    nome;
    tipo = TiposENUMs_1.TipoItem.POCAO; // Pocao indice 0
    valorEfeito;
    efeito; // Efeito vamos colocar na hora de criarmos o objeto (VIDA OU CURA) e vamos passar por parametro na criação
    constructor(nome, valorEfeito, efeito) {
        this.nome = nome;
        this.efeito = efeito;
        this.valorEfeito = valorEfeito;
    }
    getValorEfeito() {
        return this.valorEfeito;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return TiposENUMs_1.TipoItem[0];
    }
    // O retorno do acesso de um enum, vai ser sempre um number, é a posição dele no enum, como se fosse um array
    // Então quando eu retorno this.efeito, ele vai me retornar a posição que esse enum tem no codigo
    // CURA = 0 e FORCA = 1
    getEfeito() {
        return this.efeito;
    }
}
exports.Pocao = Pocao;
/**
 * COMENTARIOS:
 *
 *
 */ 
