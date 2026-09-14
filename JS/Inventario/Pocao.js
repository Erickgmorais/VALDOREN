"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pocao = void 0;
const TiposENUMs_1 = require("./TiposENUMs");
const TiposENUMs_2 = require("./TiposENUMs");
const Cores_1 = require("../Auxiliares/Cores");
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
/**
 * ENUMs
 * Efeitos: CURA 0, FORCA 1
 */
class Pocao {
    nome;
    tipo = TiposENUMs_1.TipoItem.POCAO; // Pocao indice 0
    efeito; // Efeito vamos colocar na hora de criarmos o objeto (VIDA OU CURA) e vamos passar por parametro na criação
    constructor(nome, efeito) {
        this.nome = nome;
        this.efeito = efeito;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return TiposENUMs_1.TipoItem[0];
    }
    getEfeito() {
        return TiposENUMs_2.EfeitoPocao[1];
    }
    // Esse método serve para que o personagem consiga usar as poções que vão ter no jogo (aumentar VIDA ou aumentar o ATAQUE).
    tomarPocao(personagem) {
        if (this.efeito === TiposENUMs_2.EfeitoPocao.CURA) {
            personagem.setVida(35);
            (0, Cores_1.blue)('Vida recuperada em 35!');
            (0, Auxiliares_1.stop)();
        }
        else if (this.efeito === TiposENUMs_2.EfeitoPocao.FORCA) {
            personagem.setAtaque(20);
            (0, Cores_1.blue)('Ataque aumentado em 20 do seu personagem!');
            (0, Auxiliares_1.stop)();
        }
    }
}
exports.Pocao = Pocao;
/**
 * COMENTARIOS:
 *
 *
 */ 
