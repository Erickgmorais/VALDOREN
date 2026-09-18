import { logger, stop } from "./Auxiliares/Auxiliares";
import { red } from "./Auxiliares/Cores";
import { iniciarConfronto } from "./Inimigos/Confronto";
import { Dragao } from "./Inimigos/Dragao";
import { Esqueleto } from "./Inimigos/Esqueleto";
import { Fantasma } from "./Inimigos/Fantasma";
import { Pocao } from "./Inventario/Pocao";

import { EfeitoPocao } from "./Inventario/TiposENUMs";
import { Bardo } from "./Personagens/Bardo";
import { Necromante } from "./Personagens/Necromante";
// import { tocarSom } from "./Auxiliares/sons";

const p1: Bardo = new Bardo('Bardo teste juliana');

const pocao1: Pocao = new Pocao('Poção de cura', EfeitoPocao.CURA);
const pocao2: Pocao = new Pocao('Poção de Forca', EfeitoPocao.FORCA);


const bicho: Dragao = new Dragao();

iniciarConfronto(p1, bicho);








