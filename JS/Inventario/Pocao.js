"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pocao = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
const TiposENUMs_2 = require("./TiposENUMs");
/**
 * ENUMs
 * Efeitos: CURA 0, FORCA 1
 */
class Pocao {
    nome;
    tipo = TiposENUMs_1.Tipo.POCAO; // Pocao indice 0
    efeito;
    constructor(nome, efeito) {
        this.nome = nome;
        this.efeito = efeito;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return TiposENUMs_1.Tipo[0];
    }
    getEfeito() {
        return TiposENUMs_2.Efeito[1];
    }
    tomarPocao(personagem) {
        if (this.efeito === TiposENUMs_2.Efeito.CURA) {
            personagem.setVida(35);
            console.log('Vida recuperada em 35!');
        }
        else if (this.efeito === TiposENUMs_2.Efeito.FORCA) {
            personagem.setDano(20);
            console.log('Aumentou 20 de dano do seu personagem!!');
        }
    }
}
exports.Pocao = Pocao;
