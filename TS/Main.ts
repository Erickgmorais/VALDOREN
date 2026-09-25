import { arteInfoJogo, clear, stop } from "./Auxiliares/Auxiliares";
import { inicio } from "./Caminhos/Caminhos";
import { iniciarConfronto } from "./Inimigos/Confronto";
import { FadaCorrompida } from "./Inimigos/FadaCorrompida";
import { Fantasma } from "./Inimigos/Fantasma";
import { criaPersonagem } from "./Personagens/CriaPersonagem";

let personagem = criaPersonagem();

clear()
arteInfoJogo();
stop();

let fada: Fantasma = new Fantasma()

iniciarConfronto(personagem, fada)