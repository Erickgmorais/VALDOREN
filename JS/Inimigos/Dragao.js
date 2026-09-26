"use strict";
//Perde HP para aumentar muito o ataque
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dragao = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
class Dragao {
    constructor() {
        this.nome = 'Dragao da montanha';
        this.vida = 100;
        this.ataque = 25;
        this.defesa = 10;
        this.habilidade = 'Conversão vida em Ataque';
    }
    getNome() {
        return this.nome;
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
    getHabilidade() {
        return this.habilidade;
    }
    // Método utilizado no inicio do combate em cada confronto
    fichaHabilidade() {
        (0, Cores_1.red)(`
O inimigo que voce ira combater tem o seguinte especial:
Com uma chande de 40% em cada ataque, ele poderá perder -5 de vida para aumentar seu ataque em +8        
        `);
    }
    tomarDano(dano) {
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória
        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);
        this.vida -= danoFinal;
        (0, Cores_1.blue)(`
-- ----------------------------------------- --        
    ${this.nome.toUpperCase()} TOMOU DANO!
    Dano recebido: ${dano}
    Defesa: ${defesaAleatoria}
    Dano efetivo recebido: ${danoFinal}
-- ----------------------------------------- --    
        `);
        if (this.vida < 0) {
            this.vida = 0;
            return dano;
        }
        return dano;
    }
    //Método de ataque. Rouba hp para dar mais dano
    atacar(personagem) {
        const chance = Math.random(); // controlar a chance do personagem roubar HP para dar mais dano
        let danoFinal;
        if (chance < 0.40) { // 34% de chance de aumentar o dano dele
            this.vida -= 5;
            this.ataque += 8;
            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // cálculo aleatório do dado do inimigo
            (0, Cores_1.red)(`
    ${this.nome.toUpperCase()}
    ╔════════════════════════════════════════╗
    ║              ESPECIAL!                 ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome.toUpperCase().padEnd(38)} 
    ║ sacrificou 5 de vida!                  ║
    ║                                        ║
    ║ ATAQUE AUMENTADO : +8                  ║
    ║ ATAQUE ATUAL     : ${String(this.ataque).padEnd(17)}   
    ║                                        ║
    ╚════════════════════════════════════════╝
`);
            personagem.tomarDano(danoFinal); // personagem tomando dano 
            (0, Auxiliares_1.stop)();
        }
        else {
            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // Calculo o dano final de acordo com a variante da minha chance de especial
            (0, Cores_1.red)(`
    ATAQUE DO INIMIGO:        
    ╔═══════════════════════════════════════════════╗
    ║                 ATAQUE                        ║
    ╠═══════════════════════════════════════════════╣
    ║                                               ║
    ║ ${this.nome} atacou                           
    ║                                               ║
    ║ DANO ENVIADO  : ${String(danoFinal).padEnd(27)}
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
                `);
            personagem.tomarDano(danoFinal); // personagem tomando dano 
            (0, Auxiliares_1.stop)();
        }
    }
    ;
    //Mostrar dados do inimigo
    fichaInimigo() {
        (0, Cores_1.red)(`      
    ╔═════════════════════════════════════════╗
    ║                 INIMIGO                 ║
    ╠═════════════════════════════════════════╣
    ║                                         ║
    ║ NOME        : ${String(this.nome).padEnd(23)}   
    ║ VIDA        : ${String(this.vida).padEnd(23)}   
    ║ ATAQUE      : ${String(this.ataque).padEnd(23)}   
    ║ DEFESA      : ${String(this.defesa).padEnd(23)}   
    ║ HABILIDADE  : ${String(this.habilidade).padEnd(23)} 
    ║                                         ║
    ╚═════════════════════════════════════════╝
        `);
    }
}
exports.Dragao = Dragao;
