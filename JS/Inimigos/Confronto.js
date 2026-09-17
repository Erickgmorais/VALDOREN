"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciarConfronto = iniciarConfronto;
const Cores_1 = require("../Auxiliares/Cores");
function iniciarConfronto(personagem, inimigo) {
    (0, Cores_1.purple)(`O confronto entre ${personagem.getNome()} e ${inimigo.getNome()} comecou!`);
    let finalConfronto = false;
    while (!finalConfronto) {
        if (personagem.getVida() > 0) {
            personagem.fichaPersonagem();
            inimigo.fichaInimigo();
        }
        else {
            (0, Cores_1.red)(`Voce morreu`);
        }
    }
}
