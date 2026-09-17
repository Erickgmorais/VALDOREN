import { logger, stop } from "./Auxiliares/Auxiliares";
import { Pocao } from "./Inventario/Pocao";

import { EfeitoPocao } from "./Inventario/TiposENUMs";
import { Bardo } from "./Personagens/Bardo";
import { Necromante } from "./Personagens/Necromante";
// import { tocarSom } from "./Auxiliares/sons";

const demon: Bardo = new Necromante('demonio teddy');

// logger(bardo.getOuro()) 

const pocao1: Pocao = new Pocao('Poção de cura', EfeitoPocao.CURA);
const pocao2: Pocao = new Pocao('Poção de Forca', EfeitoPocao.FORCA);

// bardo.mostrarInventario()
// stop()



// bardo.adicionaInventario(pocao1);
// bardo.adicionaInventario(pocao2);
demon.fichaPersonagem()
stop()
// logger(pocao1.getEfeito())
// logger(pocao2.getEfeito())

// logger(pocao1)
// logger(pocao2)

// bardo.tomarPocao(pocao1)
// bardo.tomarPocao(pocao2)

// bardo.fichaPersonagem()






