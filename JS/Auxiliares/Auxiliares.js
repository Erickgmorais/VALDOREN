"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.stop = stop;
exports.clear = clear;
exports.consoleEspecial = consoleEspecial;
exports.arteInicioConfronto = arteInicioConfronto;
exports.arteInimigoDerrotado = arteInimigoDerrotado;
exports.arteVoceMorreu = arteVoceMorreu;
exports.escolhasCombate = escolhasCombate;
exports.mostrarInfoCombate = mostrarInfoCombate;
exports.infosConfronto = infosConfronto;
const Cores_1 = require("./Cores");
const ask = require('readline-sync');
exports.logger = console.log;
// Método para stopar a execução no terminal (Em roxo)
function stop() {
    ask.question('\x1b[35mPressione ENTER para continuar...\x1b[0m');
}
// Método só para nao precisar sempre ficar digitando console.clear para limpar o terminal
function clear() {
    console.clear();
}
function consoleEspecial() {
    (0, Cores_1.purple)(`
--------------------------------------------------------------------------------------        
 ███  █████  ███   ███  █   █ █████    █████  ████ ████  █████  ███  ███  ███  █       
█ ░░█  ░█░░░█ ░░█ █ ░░█ █░  █░█░░░░░   █░░░░░█ ░░░░█░░░█ █░░░░░█ ░░░  █░░█ ░░█ █░      
█████░  █░░░█████░█░ ░█░█░░ █░████░░░  ████░░░███░░████░░████░░█░ ░░░ █░░█████░█░░     
█░░░█░░ █░░ █░░░█░█░░█ ░█░░ █░█░░░░    █░░░░   ░░█ █░░░░ █░░░░ █░░    █░░█░░░█░█░░     
█░░░█░░ █░░ █░░░█░░██ █ ░███ ░█████░   █████░████░░█░░░░░█████░ ███  ███░█░░░█░█████   
 ░░  ░░  ░░  ░░  ░░ ░░ ░  ░░░ ░░░░░░    ░░░░░ ░░░░ ░░░    ░░░░░  ░░░  ░░░ ░░  ░░░░░░░  
  ░   ░   ░   ░   ░  ░░ ░  ░░░  ░░░░░    ░░░░░ ░░░░  ░     ░░░░░  ░░░  ░░░ ░   ░ ░░░░░ 
--------------------------------------------------------------------------------------   
        `);
}
function arteInicioConfronto() {
    (0, Cores_1.blue)(`
----------------------------------------------------------------------------------------------------    
 ███   ███  █   █ █████ ████   ███  █   █ █████  ███     ███ █   █ ███  ███  ███  ███  ████   ███    
█ ░░░ █ ░░█ ██  █░█░░░░░█░░░█ █ ░░█ ██  █░ ░█░░░█ ░░█     █░░██  █░ █░░█ ░░░  █░░█ ░░█ █░░░█ █ ░░█   
█░ ░░░█░ ░█░█░█ █░████░░████░░█░ ░█░█░█ █░░ █░░░█░ ░█░    █░░█░█ █░░█░░█░ ░░░ █░░█████░█░░░█░█░ ░█░  
█░░   █░░ █░█░░██░█░░░░ █░░█░ █░░ █░█░░██░░ █░░ █░░ █░░   █░░█░░██░░█░░█░░    █░░█░░░█░█░░ █░█░░ █░░ 
 ███   ███ ░█░░ █░█░░░░░█░░░█░ ███ ░█░░ █░░ █░░  ███ ░░  ███░█░░ █░███░ ███  ███░█░░░█░████ ░░███ ░░ 
  ░░░   ░░░ ░░░  ░░░░    ░░  ░  ░░░ ░░░  ░░  ░░   ░░░ ░   ░░░ ░░  ░░░░░  ░░░  ░░░ ░░  ░░░░░░ ░ ░░░ ░ 
   ░░░   ░░░  ░   ░ ░     ░   ░  ░░░  ░   ░   ░    ░░░     ░░░ ░   ░ ░░░  ░░░  ░░░ ░   ░ ░░░░   ░░░  
----------------------------------------------------------------------------------------------------
    `);
}
function arteInimigoDerrotado() {
    (0, Cores_1.green)(`
---------------------------------------------------------------------------------------------                    
███ █   █ ███ █   █ ███  ███   ███     ████  █████ ████  ████   ███  █████  ███  ████   ███    
 █░░██  █░ █░░██ ██░ █░░█ ░░░ █ ░░█    █░░░█ █░░░░░█░░░█ █░░░█ █ ░░█  ░█░░░█ ░░█ █░░░█ █ ░░█   
 █░░█░█ █░░█░░█░█ █░░█░░█░ ██░█░ ░█░   █░░░█░████░░████░░████░░█░ ░█░  █░░░█████░█░░░█░█░ ░█░  
 █░░█░░██░░█░░█░░░█░░█░░█░░ █░█░░ █░░  █░░ █░█░░░░ █░░█░ █░░█░ █░░ █░░ █░░ █░░░█░█░░ █░█░░ █░░ 
███░█░░ █░███░█░░ █░███░ ███ ░░███ ░░  ████ ░█████░█░░░█░█░░░█░ ███ ░░ █░░ █░░░█░████ ░░███ ░░ 
 ░░░ ░░  ░░░░░ ░░  ░░░░░  ░░░ ░ ░░░ ░   ░░░░ ░░░░░░ ░░  ░ ░░  ░  ░░░ ░  ░░  ░░  ░░░░░░ ░ ░░░ ░ 
  ░░░ ░   ░ ░░░ ░   ░ ░░░  ░░░   ░░░     ░░░░  ░░░░░ ░   ░ ░   ░  ░░░    ░   ░   ░ ░░░░   ░░░ 
---------------------------------------------------------------------------------------------                     
                    `);
}
function arteVoceMorreu() {
    (0, Cores_1.red)(`
--------------------------------------------------------------------
█   █  ███   ███  █████    █   █  ███  ████  ████  █████ █   █   
█░  █░█ ░░█ █ ░░░ █░░░░░   ██ ██░█ ░░█ █░░░█ █░░░█ █░░░░░█░  █░  
█░░ █░█░ ░█░█░ ░░░████░░░  █░█ █░█░ ░█░████░░████░░████░░█░░ █░░ 
 █░█ ░█░░ █░█░░   █░░░░    █░░░█░█░░ █░█░░█░ █░░█░ █░░░░ █░░ █░░ 
  █ ░ ░███ ░░███  █████░   █░░ █░░███ ░█░░░█░█░░░█░█████░ ███ ░░ 
   ░ ░  ░░░ ░ ░░░  ░░░░░    ░░  ░░ ░░░ ░░░  ░ ░░  ░ ░░░░░  ░░░ ░ 
    ░    ░░░   ░░░  ░░░░░    ░   ░  ░░░  ░   ░ ░   ░ ░░░░░  ░░░                  
--------------------- SUA JORNADA ACABOU ---------------------------
    `);
}
function escolhasCombate(personagem) {
    if (personagem.getUsouAtaqueEspecial()) {
        (0, Cores_1.green)(`
=================================
    QUAL A SUA AÇÃO A SEGUIR?
=================================
1 - Ataque
2 - Abrir inventario

        `);
    }
    else {
        (0, Cores_1.green)(`
=================================
     QUAL A SUA AÇÃO A SEGUIR?
=================================
1 - Ataque
2 - Abrir inventario
3 - !!!! UTILIZAR ATAQUE ESPECIAL !!!!
            `);
    }
}
function mostrarInfoCombate(personagem, inimigo) {
    (0, Cores_1.yellow)(`
╔═══════════════════════════════════╗     ╔═════════════════════════════════════════╗
║            PERSONAGEM             ║     ║                 INIMIGO                 ║
╠═══════════════════════════════════╣     ╠═════════════════════════════════════════╣
║                                   ║     ║                                         ║
║  NOME   : ${String(personagem.getNome()).padEnd(23)} ║     ║ NOME        : ${String(inimigo.getNome()).padEnd(23)}   ║
║  VIDA   : ${String(personagem.getVida()).padEnd(23)} ║     ║ VIDA        : ${String(inimigo.getVida()).padEnd(23)}   ║
║  ATAQUE : ${String(personagem.getAtaque()).padEnd(23)} ║     ║ ATAQUE      : ${String(inimigo.getAtaque()).padEnd(23)}   ║
║  DEFESA : ${String(personagem.getDefesa()).padEnd(23)} ║     ║ DEFESA      : ${String(inimigo.getDefesa()).padEnd(23)}   ║
║                                   ║     ║ HABILIDADE  : ${String(inimigo.getHabilidade()).padEnd(23)} 
║                                   ║     ║                                         ║
╚═══════════════════════════════════╝     ╚═════════════════════════════════════════╝
`);
}
function infosConfronto() {
    (0, Cores_1.blue)(`
Informacoes do confronto

PERSONAGEM:
O dano causado pelo personagem é fixo, de acordo com seu valor de ataque. 
Porém, o dano efetivo pode variar conforme a defesa do inimigo.

Ao receber um ataque, sua defesa será calculada aleatoriamente, 
podendo variar de 0 até o valor máximo de sua defesa.     

INIMIGO:
Dano
O dano causado pelo inimigo é aleatório,
podendo variar de 0 até o valor máximo de seu ataque

A defesa do inimigo também é aleatória,
podendo variar de 0 até o valor máximo de sua defesa.

Boa sorte, aventureiro!
Cada confronto pode ser diferente.
Use suas habilidades com estratégia.
        `);
}
