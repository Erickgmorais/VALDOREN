import { logger } from "./Auxiliares/Auxiliares";
import { Ouro } from "./Inventario/Ouro";
import { Pocao } from "./Inventario/Pocao";
import { EfeitoPocao } from "./Inventario/TiposENUMs";
import { Bardo } from "./Personagens/Bardo";

const bardo: Bardo = new Bardo('bardo Teste');

logger(bardo.getOuro()) 

const pocao1: Pocao = new Pocao('Poção de cura', EfeitoPocao.CURA);
const pocao2: Pocao = new Pocao('Poção de Forca', EfeitoPocao.FORCA);


bardo.adicionaInventario(pocao1);
bardo.adicionaInventario(pocao2);

logger(pocao1)
logger(pocao2)

bardo.mostrarInventario();





