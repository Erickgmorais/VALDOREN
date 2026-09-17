import { logger, stop } from "./Auxiliares/Auxiliares";
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
p1.adicionaInventario(pocao1);
p1.adicionaInventario(pocao2);

const bicho: Dragao = new Dragao()

// bicho.fichaInimigo()

// p1.atacar(bicho);

// bicho.fichaInimigo()

bicho.fichaInimigo()

bicho.atacar(p1)

bicho.fichaInimigo()



// p1.fichaPersonagem()
// stop()

// logger(pocao1.getEfeito())
// logger(pocao2.getEfeito())

// logger(pocao1)
// logger(pocao2)

// p1.tomarPocao(pocao1)
// p1.tomarPocao(pocao2)

// p1.fichaPersonagem()






