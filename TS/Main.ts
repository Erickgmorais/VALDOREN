import { logger, stop } from "./Auxiliares/Auxiliares";
import { red } from "./Auxiliares/Cores";
import { iniciarConfronto } from "./Inimigos/Confronto";
import { Dragao } from "./Inimigos/Dragao";
import { Esqueleto } from "./Inimigos/Esqueleto";
import { FadaCorrompida } from "./Inimigos/FadaCorrompida";
import { Fantasma } from "./Inimigos/Fantasma";
import { Pocao } from "./Inventario/Pocao";

import { EfeitoPocao } from "./Inventario/TiposENUMs";
import { Bardo } from "./Personagens/Bardo";
import { Berserker } from "./Personagens/Berserker";
import { Necromante } from "./Personagens/Necromante";
import { Personagem } from "./Personagens/Personagem";
// import { tocarSom } from "./Auxiliares/sons";

const p1: Bardo = new Bardo('alouuuuu');

const pocao1: Pocao = new Pocao('Poção de cura', EfeitoPocao.CURA);
const pocao2: Pocao = new Pocao('Poção de Forca', EfeitoPocao.FORCA);

p1.adicionaInventario(pocao1)
p1.adicionaInventario(pocao2)

const bicho: Esqueleto = new Esqueleto();

iniciarConfronto(p1, bicho);








