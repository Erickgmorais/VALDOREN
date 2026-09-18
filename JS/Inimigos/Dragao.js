"use strict";
//Perde HP para aumentar muito o ataque
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dragao = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
class Dragao {
    nome = 'Dragao da montanha';
    vida = 90;
    ataque = 12;
    defesa = 3;
    habilidade = 'Conversão vida em Ataque';
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
    tomarDano(dano) {
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória
        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);
        this.vida -= danoFinal;
        (0, Cores_1.red)(`
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
        if (chance < 0.30) { // 30% de chance de aumentar o dano dele
            this.vida -= 5;
            this.ataque += 8;
            danoFinal = Math.floor(Math.random() * this.ataque) + 1; // cálculo aleatório do dado do inimigo
            (0, Cores_1.red)(`
    ATAQUE DO INIMIGO:
    ╔════════════════════════════════════════╗
    ║               ESPECIAL!                ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${this.nome} sacrificou 5 de vida!     ║
    ║                                        ║
    ║ ATAQUE AUMENTADO : +8                  ║
    ║ ATAQUE ATUAL : ${this.ataque}          ║
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
    ╔════════════════════════════════════════╗
    ║                 ATAQUE                 ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ ${`${this.nome} atacou ${personagem.getNome()}!`.padEnd(39)}║
    ║                                        ║
    ║ DANO CAUSADO  : ${String(danoFinal).padEnd(23)}║
    ║ VIDA RESTANTE : ${String(personagem.getVida()).padEnd(23)}║
    ║                                        ║
    ╚════════════════════════════════════════╝
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
    ║ NOME        : ${String(this.nome).padEnd(23)}   ║
    ║ VIDA        : ${String(this.vida).padEnd(23)}   ║
    ║ ATAQUE      : ${String(this.ataque).padEnd(23)}   ║
    ║ DEFESA      : ${String(this.defesa).padEnd(23)}   ║
    ║ HABILIDADE  : ${String(this.habilidade).padEnd(23)} ║
    ║                                         ║
    ╚═════════════════════════════════════════╝
        `);
    }
}
exports.Dragao = Dragao;
