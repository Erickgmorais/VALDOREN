"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.stop = stop;
exports.clear = clear;
exports.consoleEspecial = consoleEspecial;
exports.inimigoDerrotado = inimigoDerrotado;
exports.morreu = morreu;
exports.escolhasCombate = escolhasCombate;
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
 ███  █████  ███   ███  █   █ █████    █████  ████ ████  █████  ███  ███  ███  █       
█ ░░█  ░█░░░█ ░░█ █ ░░█ █░  █░█░░░░░   █░░░░░█ ░░░░█░░░█ █░░░░░█ ░░░  █░░█ ░░█ █░      
█████░  █░░░█████░█░ ░█░█░░ █░████░░░  ████░░░███░░████░░████░░█░ ░░░ █░░█████░█░░     
█░░░█░░ █░░ █░░░█░█░░█ ░█░░ █░█░░░░    █░░░░   ░░█ █░░░░ █░░░░ █░░    █░░█░░░█░█░░     
█░░░█░░ █░░ █░░░█░░██ █ ░███ ░█████░   █████░████░░█░░░░░█████░ ███  ███░█░░░█░█████   
 ░░  ░░  ░░  ░░  ░░ ░░ ░  ░░░ ░░░░░░    ░░░░░ ░░░░ ░░░    ░░░░░  ░░░  ░░░ ░░  ░░░░░░░  
  ░   ░   ░   ░   ░  ░░ ░  ░░░  ░░░░░    ░░░░░ ░░░░  ░     ░░░░░  ░░░  ░░░ ░   ░ ░░░░░ 
        `);
}
function inimigoDerrotado() {
    (0, Cores_1.red)(`
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
function morreu() {
    (0, Cores_1.red)(`
--------------------------------------------------------------------

█   █  ███   ███  █████    █   █  ███  ████  ████  █████ █   █   
█░  █░█ ░░█ █ ░░░ █░░░░░   ██ ██░█ ░░█ █░░░█ █░░░█ █░░░░░█░  █░  
█░░ █░█░ ░█░█░ ░░░████░░░  █░█ █░█░ ░█░████░░████░░████░░█░░ █░░ 
 █░█ ░█░░ █░█░░   █░░░░    █░░░█░█░░ █░█░░█░ █░░█░ █░░░░ █░░ █░░ 
  █ ░ ░███ ░░███  █████░   █░░ █░░███ ░█░░░█░█░░░█░█████░ ███ ░░ 
   ░ ░  ░░░ ░ ░░░  ░░░░░    ░░  ░░ ░░░ ░░░  ░ ░░  ░ ░░░░░  ░░░ ░ 
    ░    ░░░   ░░░  ░░░░░    ░   ░  ░░░  ░   ░ ░   ░ ░░░░░  ░░░                  
                
    ----------------- SUA JORNADA ACABOU ------------
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
3 - ! UTLIZAR ATAQUE ESPECIAL !
            `);
    }
}
