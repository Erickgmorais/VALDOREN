import { arteInfoJogo, clear, stop, tituloJogo } from "./Auxiliares/Auxiliares";
import { inicio } from "./Caminhos/Caminhos";
import { criaPersonagem } from "./Personagens/CriaPersonagem";


//Logger de apresentação do game.
tituloJogo();

//Criação Personagem
let personagem = criaPersonagem();

clear()
arteInfoJogo();
stop();

//Inicio Historia
inicio(personagem);


