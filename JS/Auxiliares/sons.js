"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tocarSom = tocarSom;
const play_sound_1 = __importDefault(require("play-sound"));
const player = (0, play_sound_1.default)();
function tocarSom(caminhoArquivo) {
    player.play(caminhoArquivo, (err) => {
        if (err)
            console.error('Erro ao tocar o som:', err);
    });
}
