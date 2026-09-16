"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const TiposENUMs_1 = require("../Inventario/TiposENUMs");
const ask = require('readline-sync');
class Personagem {
    nome;
    classe;
    vida;
    ataque;
    defesa;
    ouro;
    reputacao;
    inventario = [];
    moeda = false;
    constructor(nome, classe, vida, ataque, defesa, ouro, reputacao) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ouro = ouro;
        this.reputacao = reputacao;
    }
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
    getTemMoeda() {
        return this.moeda;
    }
    setVida(val) {
        this.vida += val;
    }
    setAtaque(val) {
        this.ataque += val;
    }
    // método para ganhar adicionar ouro
    setOuro(val) {
        this.ouro += val;
    }
    // -- ----------------------------- --
    // Métodos principais
    // utilizado pra fazer o personagem pegar a moeda para entrar na caverna posteriormente na história
    pegarMoeda() {
        this.moeda = true;
    }
    // controle de inventário dos personagens
    adicionaInventario(item) {
        this.inventario.push(item);
    }
    removeIteminventario(item) {
        const position = this.inventario.indexOf(item);
        if (position > -1) {
            this.inventario.splice(position, 1);
        }
    }
    tomarPocao(pocao) {
        if (pocao.getEfeito() === TiposENUMs_1.EfeitoPocao.CURA) { // CURA = 0
            this.setVida(35);
            (0, Cores_1.blue)('Vida recuperada em 35!');
            (0, Auxiliares_1.stop)();
        }
        else if (pocao.getEfeito() === TiposENUMs_1.EfeitoPocao.FORCA) { // FORÇA = 1
            this.setAtaque(20);
            (0, Cores_1.blue)('Ataque aumentado em 20 do seu personagem!');
            (0, Auxiliares_1.stop)();
        }
    }
    mostrarInventario() {
        (0, Auxiliares_1.clear)();
        let temPocao = this.inventario.some((item) => item.getTipo() === 'POCAO');
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
        // verifica se tem 
        if (temPocao) {
            (0, Cores_1.green)(`
        1 - Usar pocao
        2 - Dropar item
        3 - Fechar inventário            
                `);
        }
        else {
            (0, Cores_1.green)(`
        1̶ ̶-̶ ̶U̶s̶a̶r̶ ̶p̶o̶c̶a̶o̶ (Voce não possui pocoes a serem utilizadas)
        2 - Dropar item
        3 - Fechar inventário`);
        }
    }
    fichaPersonagem() {
        (0, Cores_1.green)(`
    ╔═══════════════════════════════════╗
    ║          FICHA DO JOGADOR         ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  NOME   : ${this.nome.padEnd(23)} ║
    ║  CLASSE : ${this.classe.padEnd(23)} ║
    ║                                   ║
    ╠═══════════════════════════════════╣
    ║            ATRIBUTOS              ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  VIDA   : ${String(this.vida + '/100').padEnd(23)} ║
    ║  ATAQUE : ${String(this.ataque).padEnd(23)} ║
    ║  DEFESA : ${String(this.defesa).padEnd(23)} ║
    ║                                   ║
    ╚═══════════════════════════════════╝
    `);
    }
}
exports.Personagem = Personagem;
/** COMENTARIOS
 * Podemos adicionar um método "Usar Habilidade" aqui. E
 * Definir com Erick sobre moeda J
 *
 *
 */
