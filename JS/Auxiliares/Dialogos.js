"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.falaPersonagem = falaPersonagem;
exports.falaFigurante = falaFigurante;
exports.dialogoComerciante = dialogoComerciante;
const Auxiliares_1 = require("./Auxiliares");
// Método para demorar para escrever cada palavra no terminal para controlar falas (Feito por IA)
async function falaPersonagem(texto) {
    for (const letra of texto) {
        process.stdout.write(`\x1b[32m${letra}\x1b[0m`);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    console.log();
}
async function falaFigurante(texto) {
    for (const letra of texto) {
        process.stdout.write(`\x1b[35m${letra}\x1b[0m`);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    console.log();
}
async function dialogoComerciante(personagem) {
    (0, Auxiliares_1.clear)();
    await falaPersonagem(`${personagem.getNome().toUpperCase()}: Olá! Cheguei na cidade agora após uma viagem cansativa, você tem alguma bebida forte?`);
    await falaFigurante(`Comerciante: Tenho uma dose de cachaça. Serve?`);
    (0, Auxiliares_1.stop)();
}
