"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fantasma = void 0;
//Chance de ignorar completamente um ataque
const Cores_1 = require("../Auxiliares/Cores");
class Fantasma {
    nome = 'Fantasma do Clerigo';
    vida = 50;
    ataque = 15;
    defesa = 3;
    habilidade = 'Esquiva';
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
    //Método de ataque.
    atacar(personagem) {
        const danoFinal = Math.floor(Math.random() * this.ataque) + 1; // calculo o dano aleatorio 
        personagem.tomarDano(danoFinal); // executo o dano no inimigo
    }
    tomarDano(dano) {
        const chance = Math.random(); // controlar a chance do personagem se esquivar do dano!
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1)); // defesa aleatória
        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria);
        if (chance < 0.30) {
            (0, Cores_1.red)(`    
    ╔═══════════════════════════════════════════════╗
    ║               INTANGIBILIDADE!                ║
    ╠═══════════════════════════════════════════════╣
    ║ ${String(this.nome).padEnd(45)} ║
    ║                                               ║
    ║ ignorou completamente o ataque e se           ║
    ║ esquivou do dano recebido!                    ║
    ║                                               ║
    ║ CHANCE DE ESQUIVA : 30%                       ║
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
        `);
        }
        else {
            this.vida -= danoFinal;
            (0, Cores_1.red)(`
    -- ----------------------------------------- --            
        ${this.nome.toUpperCase()} TOMOU DANO!
        Dano recebido: ${dano}
        Defesa: ${defesaAleatoria}
        Dano efetivo recebido: ${danoFinal}
    -- ----------------------------------------- -- 
        `);
        }
        if (this.vida < 0) {
            this.vida = 0;
            (0, Cores_1.red)('Inimigo morreu');
            return dano;
        }
        return dano;
    }
    //Mostrar dados do inimigo
    fichaInimigo() {
        (0, Cores_1.red)(`
    ╔════════════════════════════════════════╗
    ║                 INIMIGO                ║
    ╠════════════════════════════════════════╣
    ║                                        ║
    ║ NOME        : ${String(this.nome).padEnd(23)}  ║
    ║ VIDA        : ${String(this.vida).padEnd(23)}  ║
    ║ ATAQUE      : ${String(this.ataque).padEnd(23)}  ║
    ║ DEFESA      : ${String(this.defesa).padEnd(23)}  ║
    ║ HABILIDADE  : ${String(this.habilidade).padEnd(23)}  ║
    ║                                        ║
    ╚════════════════════════════════════════╝
`);
    }
}
exports.Fantasma = Fantasma;
