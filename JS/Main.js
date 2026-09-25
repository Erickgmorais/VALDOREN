"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Caminhos_1 = require("./Caminhos/Caminhos");
const Fantasma_1 = require("./Inimigos/Fantasma");
const Bardo_1 = require("./Personagens/Bardo");
// let personagem = criaPersonagem();
let personagem = new Bardo_1.Bardo('Caveira das trevas');
// clear()
// arteInfoJogo();
// stop();
let fada = new Fantasma_1.Fantasma();
(0, Caminhos_1.inicio)(personagem);
// dialogoComerciante(personagem);
