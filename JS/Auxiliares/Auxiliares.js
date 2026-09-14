"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.stop = stop;
const ask = require('readline-sync');
exports.logger = console.log;
// Método para stopar a execução no terminal (Em roxo)
function stop() {
    ask.question('\x1b[35mPressione ENTER para continuar...\x1b[0m');
}
